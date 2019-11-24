import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onClickLabel, onMarkClick, filter }) => {

  let newEls = [];
  switch (filter) {
    case 'active':
      newEls = todos.filter(el => !el.done);
    break;

    case 'done':
      newEls = todos.filter(el => el.done);
    break;
  
    default:
        newEls = todos;
    break;
  }

  const elements = newEls.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
        {...itemProps }
        onDelete={() => onDelete(id)}
        onClickLabel={() => onClickLabel(id)}
        onMarkClick={() => onMarkClick(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
