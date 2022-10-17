import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [taskForm, setTaskForm] = useState({
    text: "",
    category: "Code"
  })

  function handleChange(e) {
    const { name, value } = e.target

    setTaskForm({ ...taskForm, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(taskForm)
    setTaskForm({
      text: "",
      category: "Code"
    })
  }

  const sortCats = categories.filter((cat) => {
    return cat !== "All"
  })

  const renderSelect = sortCats.map((cat, index) => {
    return <option key={index} value={cat}>{cat}</option>
  })



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={taskForm.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={taskForm.category}>
          {renderSelect}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
