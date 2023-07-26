import React from "react";
import Task from "./Task"; // Make sure the file path is correct

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => {}}
        />
      ))}
    </div>
  );
}

export default TaskList;
