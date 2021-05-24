import React from "react";

function TodoForm({ addTodo }) {
  // Input tracker
  let input;

  return (
    <div className="form-group" style={{ display: "flex" }}>
      <input
        ref={(node) => {
          input = node;
        }}
        className="form-control"
      />
      <button
        className="btn btn-success"
        style={{ width: "10%" }}
        onClick={() => {
          addTodo(input.value);
          input.value = "";
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoForm;
