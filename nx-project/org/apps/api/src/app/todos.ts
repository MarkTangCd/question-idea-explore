import { Express } from 'express';
import { Todo } from '@org/data';

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

interface IRequest {
  text: string;
}

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post<IRequest>('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: req.body.text,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
