import { useState, useEffect } from 'react';
import { Button, Input, Text } from '@chakra-ui/react';
import { Todo } from '@org/data';
import { Todos } from '@org/ui';

import styled from './app.module.css';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
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
      });
  }

  return (
    <div className={styled['wrapper']}>
      <Text fontSize='6xl'>Todos</Text>
      <Todos todos={todos} />
      <div className={styled['todo-text']}>
        <Input value={text} onChange={(e) => setText(e.target.value)} placeholder='Please input the text of todo' />
      </div>
      <Button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </Button>
    </div>
  );
}

export default App;
