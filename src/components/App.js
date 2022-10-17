import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState("All")

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function updateFilter(newFilter) {
    setFilter(newFilter)
  }

  const filteredTask = tasks.filter((task) => {
    if (filter === "All") {
      return true
    } else {
      return task.category === filter
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateFilter={updateFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTask} />
    </div>
  );
}

export default App;
