import { useEffect } from 'react';
import { Button, Input, Text } from '@chakra-ui/react';
import { Todos } from '@org/ui';
import { useStore } from '@org/store';

import styled from './app.module.css';

export const App = () => {
  const text = useStore((state) => state.text);
  const todos = useStore((state) => state.todos);
  const deleted = useStore((state) => state.deleted);
  const finished = useStore((state) => state.finished);
  const onGetTodos = useStore((state) => state.onGetTodos);
  const onAddTodo = useStore((state) => state.onAddTodo);
  const onTextChange = useStore((state) => state.onTextChange);
  const onFinish = useStore((state) => state.onFinish);
  const onDelete = useStore((state) => state.onDelete);

  useEffect(() => {
    onGetTodos();
  }, []);

  return (
    <div className={styled['wrapper']}>
      <Text fontSize='6xl'>Todos</Text>
      <Todos todos={todos} finished={finished} deleted={deleted} onDelete={onDelete} onFinish={onFinish} />
      <div className={styled['todo-text']}>
        <Input value={text} onChange={onTextChange} placeholder='Please input the text of todo' />
      </div>
      <Button id={'add-todo'} onClick={() => onAddTodo(text)}>
        Add Todo
      </Button>
    </div>
  );
}

export default App;
