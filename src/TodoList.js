import React from "react";
import { connect } from "react-redux";

function TodoList(props) {
  const remove = (id) => {
    props.dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  const todoNode = props.todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} remove={remove} />;
  });
  return <ul>{todoNode}</ul>;
}

const Todo = ({ todo, remove }) => {
  return (
    <li style={{ cursor: "pointer" }} onClick={() => remove(todo.id)}>
      {todo.text}
    </li>
  );
};

export default connect()(TodoList);
