import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const render = todos.map((item) => {
    const DeleteHandler = (id) => {
      const filtertodo = todos.filter((todo) => todo.id != id);
      settodos(filtertodo);
    };
    return (
      <li
        className="bg-slate-300 list-decimal text-black rounded-xl py-2 px-5 mb-2 flex justify-between items-center"
        key={item.id}
      >
        {item.title}
        <span
          className="text-lg ml-1.5 cursor-pointer"
          onClick={() => DeleteHandler(item.id)}
        >
          🗑️
        </span>
      </li>
    );
  });
  // console.log(render);
  return (
    <div className="w-[50%] p-10">
      <h1 className="text-5xl font-thin mb-10">
        <span className="text-gray-600">You’ve</span> Added{" "}
        <span className="text-indigo-600">These</span>!
      </h1>
      <ol className="text-xl list-disc pl-6 font-thin text-[2rem]">{render}</ol>
    </div>
  );
};

export default Read;
