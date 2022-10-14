import { useState, useEffect } from 'react';
import { Button, Input, Text, useToast } from '@chakra-ui/react';
import { Todo } from '@org/data';
import { Todos } from '@org/ui';

import styled from './app.module.css';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finished, setFinished] = useState<string[]>([]);
  const [deleted, setDeleted] = useState<string[]>([]);
  const [text, setText] = useState('');
  const toast = useToast();

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const onDelete = (title: string) => {
    const newArr = deleted.concat([title]);
    setDeleted(newArr);
    toast({
      title: 'Note:',
      description: 'This todo deleted',
      status: 'success'
    });
  }

  const onFinished = (title: string) => {
    const newArr = finished.concat([title]);
    setFinished(newArr);
    toast({
      title: 'Note:',
      description: 'This todo is done',
      status: 'success'
    });
  }

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text
      }),
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
        setText('');
      });
  }

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setText(e.target.value);
  }

  return (
    <div className={styled['wrapper']}>
      <Text fontSize='6xl'>Todos</Text>
      <Todos todos={todos} finished={finished} deleted={deleted} onDelete={onDelete} onFinish={onFinished} />
      <div className={styled['todo-text']}>
        <Input value={text} onChange={onTextChange} placeholder='Please input the text of todo' />
      </div>
      <Button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </Button>
    </div>
  );
}

export default App;
