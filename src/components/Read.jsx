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
      <li className="list-decimal ml-5" key={item.id}>
        {item.title}
        <span className="text-lg ml-1.5 cursor-pointer" onClick={() => DeleteHandler(item.id)}>
          🗑️
        </span>
      </li>
    );
  });
  // console.log(render);
  return (
    <div>
      <h1 className="text-3xl font-thin">Rendering the data:</h1>
      <ol className="text-xl list-decimal pl-6 font-thin text-[1.5rem] text-[#FA294E]">
        {render}
      </ol>
    </div>
  );
};

export default Read;
