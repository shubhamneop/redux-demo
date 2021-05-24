import "./App.css";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App(props) {
  const incrementHandle = () => {
    props.dispatch({
      type: "INCREMENT",
    });
  };
  const decrementHandle = (_) => {
    props.dispatch({
      type: "DECREMENT",
    });
  };

  const addTodo = (val) => {
    if (val == "") {
      alert("Enter task");
      return;
    }
    props.dispatch({
      type: "ADDTODO",
      payload: { text: val, id: Math.random().toString(5) },
    });
  };

  // const style = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   flexDirection: "row",
  //   margin: "auto",
  //   padding: "21%",
  // };

  return (
    <div className="App App-header">
      <div>
        <h2>Counter</h2>
        <div className="row">
          <button
            className="btn btn-warning col-md-4"
            onClick={decrementHandle}
          >
            -
          </button>
          <span className="btn  col-md-4">{props.count}</span>
          <button className="btn btn-info col-md-4" onClick={incrementHandle}>
            +
          </button>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <h2>TODO App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={props.todo} />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    todo: state.todo,
  };
};

export default connect(mapStateToProps, null)(App);
