import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: nanoid(), title: "Kaam karle bhaii!", isCompleted: false },
  ]);
  const render = todos.map((item) => {
    return <li key={item.id}>💌{item.title}</li>;
  });
  // console.log(render);

  const [title, settitle] = useState("");
  const [isCompleted, setisCompleted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = { id: nanoid(), title: title, isCompleted: isCompleted };
    console.log(newTodo);

    const copyTodos = [...todos];
    copyTodos.push(newTodo);
    settodos(copyTodos);
    // settodos([...todos] , newTodo);

    settitle("");
  };

  return (
    <div className="w-full h-full bg-white-500 p-5 text-black">
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
      <h1 className="text-3xl font-thin">Rendering the data:</h1>
      <ol className="text-xl font-thin text-[1.5rem] text-[#FA294E]"> {render}</ol>
    </div>
  );
};

export default App;
