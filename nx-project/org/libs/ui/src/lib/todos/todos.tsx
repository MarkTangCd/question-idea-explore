import { Todo } from '@org/data';
import './todos.module.css';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t, index) => (
        <li key={index} className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
