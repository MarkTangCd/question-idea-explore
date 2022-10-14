import React from 'react';
import { OrderedList, ListItem } from '@chakra-ui/react';
import classNames from 'classnames';
import { Todo } from '@org/data';
import styled from './todos.module.css';

export interface TodosProps {
  todos: Todo[];
  finished: string[];
  deleted: string[];
  onFinish: (title: string) => void;
  onDelete: (title: string) => void;
}

export function Todos(props: TodosProps) {
  console.log('render Todos component');
  return (
    <OrderedList>
      {props.todos.map((t) => {
        const styles = ['todo'];
        if (props.deleted.includes(t.title)) {
          styles.push(styled['deleted']);
        } else if (props.finished.includes(t.title)) {
          styles.push(styled['finished']);
        }

        return (
          <ListItem key={t.title} className={classNames(styles)} onClick={() => props.onFinish(t.title)}>{t.title}<span onClick={(e) => {
            e.stopPropagation();
            props.onDelete(t.title);
          }}>X</span></ListItem>
        )
      })}
    </OrderedList>
  );
}

export default React.memo(Todos);
