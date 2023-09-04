import React from "react";

const ToDoLists = (props) => {
  const deleteItems = () =>{
    console.log("deleted");
  };
  return(
    <>
    <div className="todo_style">
      <i className="fab fa-times" aria-hidden="true" onClick={deleteItems}>
        <li>{props.text}</li>
      </i>

      </div>
      </>
  )
  return <li>{props.text}</li>;

};

export default ToDoLists;
