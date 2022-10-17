import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const renderTask = tasks.map((task, index) => {
    return <Task key={index} text={task.text} category={task.category} />
  })

  return (
    <div className="tasks">
      {renderTask}
    </div>
  );
}

export default TaskList;
