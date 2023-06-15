import React from 'react';

const TodoList = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-group-item ${item.priority}`}
          style={{ backgroundColor: getColorByPriority(item.priority) }}
        >
          {item.task}
        </li>
      ))}
    </ul>
  );
};

const getColorByPriority = (priority) => {
  switch (priority) {
    case 'low':
      return '#98FB98'; // Light green
    case 'medium':
      return '#FFD700'; // Gold
    case 'high':
      return '#FF4500'; // Orange-red
    default:
      return '';
  }
};

export default TodoList;
