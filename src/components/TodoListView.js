import React from "react";

function TodoListView({ todos, deletHandler }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp; &nbsp;&nbsp;
            <button onClick={() => deletHandler(index)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
}

export default TodoListView;
