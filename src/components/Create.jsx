import { nanoid } from "nanoid";
import React, { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

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
    <div className="w-[50%] p-10">
      <h1 className="text-5xl font-thin mb-10">
        Just <span className="text-blue-400">add</span> and{" "}
        <span className="text-red-400">delete</span> — that’s it.
      </h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="border-b w-full outline-0 pl-7 p-4 text-2xl font-thin mb-10 rounded-4xl"
          type="text"
          placeholder="Add Your Title! "
        />
        <button className="px-5 py-2 cursor-pointer font-extralight rounded m-2 text-3xl decoration-none border-1">
          Add the task
        </button>
      </form>
    </div>
  );
};

export default Create;
