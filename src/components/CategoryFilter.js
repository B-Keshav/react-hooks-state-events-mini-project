import React from "react";

function CategoryFilter({ categories, updateFilter }) {

  function handleClick(e) {
    updateFilter(e.target.textContent)
    if (e.target.className === "") {
      e.target.className = "selected"
    }
    else {
      e.target.className = ""
    }
  }

  const renderButtons = categories.map((cat) => {
    return <button onClick={handleClick} key={cat}>{cat}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
