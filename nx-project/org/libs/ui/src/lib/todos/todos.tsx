import { OrderedList, ListItem } from '@chakra-ui/react';
import { Todo } from '@org/data';
import './todos.module.css';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <OrderedList>
      {props.todos.map((t, index) => (
        <ListItem key={index} className={'todo'}>{t.title}</ListItem>
      ))}
    </OrderedList>
  );
}

export default Todos;
