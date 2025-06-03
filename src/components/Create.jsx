import { nanoid } from "nanoid";
import React, { useState } from "react";

const Create = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    
  const [title, settitle] = useState("");
  const [isCompleted, setisCompleted] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = { id: nanoid(), title: title, isCompleted: isCompleted };
    // console.log(newTodo);

    const copyTodos = [...todos];
    copyTodos.push(newTodo);
    settodos(copyTodos);
    // settodos([...todos] , newTodo);

    settitle("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="border-2 py-2 px-3 rounded-4xl"
          type="text"
          placeholder="Add title "
        />
        <button className="px-3 py-1 rounded-full m-2 bg-sky-400 decoration-none border-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
