import React from "react";

function Task({ text, category }) {

  function handleDelete(e) {
    //console.log(e.target.parentNode)
    e.target.parentNode.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
