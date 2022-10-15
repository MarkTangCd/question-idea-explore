import { ChangeEvent } from 'react';
import create from "zustand";
import produce from "immer";
import { Todo } from '@org/data';

interface TodoState {
  text: string;
  todos: Todo[];
  finished: string[];
  deleted: string[];
  onGetTodos: () => void;
  onFinish: (text: string) => void;
  onDelete: (text: string) => void;
  onAddTodo: (text: string) => void;
  onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useStore = create<TodoState>((set) => ({
  text: '',
  todos: [],
  finished: [],
  deleted: [],
  onFinish: (text: string) =>
    set(
      produce<TodoState>((draft) => {
        draft.finished.push(text);
      })
    ),
  onDelete: (text: string) =>
    set(
      produce<TodoState>((draft) => {
        draft.deleted.push(text);
      })
    ),
  onGetTodos: () => fetch('/api/todos')
    .then((_) => _.json())
    .then((todos) => {
      set(
        produce<TodoState>((draft) => {
          draft.todos = todos;
        })
      )
    }),
  onAddTodo: (text: string) => fetch('/api/addTodo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text
    })
  }).then((_) => _.json())
  .then((newTodo: Todo) => {
    set(
      produce<TodoState>((draft) => {
        draft.todos.push(newTodo);
        draft.text = '';
      })
    )
  }),
  onTextChange: (e: ChangeEvent<HTMLInputElement>) =>
    set(
      produce<TodoState>((draft) => {
        draft.text = e.target.value;
      })
    )
}));
