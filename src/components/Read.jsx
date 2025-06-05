import { Flip, toast } from "react-toastify";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id != id);
    settodos(filtertodo);
    toast.error("Task Deleted!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });
  };

  const render = todos.map((item) => {
    return (
      <li
        className="bg-slate-300 capitalize text-black rounded-xl py-2 px-5 mb-2 flex justify-between items-center"
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

  return (
    <div className="w-[50%] p-10">
      <h1 className="text-5xl font-thin mb-10">
        <span className="text-gray-600">You’ve</span> Added{" "}
        <span className="text-indigo-600">These</span>!
      </h1>
      <ol className="text-2xl pl-6 font-thin list-decimal">{render}</ol>
    </div>
  );
};

export default Read;
