// Task.js
import React from "react";

function Task({ text, category, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(text);
  };

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="category">{category}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Task;
