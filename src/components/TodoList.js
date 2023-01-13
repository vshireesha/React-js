import React, { useState } from "react";
import TodoListView from "./TodoListView";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deletHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Managment Apllication</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="task"
                value={task}
                onChange={handleChange}
              />
              &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <br />
            <TodoListView todos={todos} deletHandler={deletHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default TodoList;
