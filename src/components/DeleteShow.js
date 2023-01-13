import React, { useState } from "react";

function DeleteShow() {
  const [divStyle, setDivStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });
  const handleDelete = () => {
    setDivStyle({ ...divStyle, display: "none" });
  };
  const handleShow = () => {
    setDivStyle({ ...divStyle, display: "block" });
  };
  return (
    <div>
      <div style={divStyle}>Hello wrold</div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShow}>Show</button>
    </div>
  );
}

export default DeleteShow;
