import { useContext } from "react";
import { Flip, toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
  const [todos, settodos] = useContext(todocontext);

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id !== id);
    settodos(filtertodo);
    toast.error("Task Deleted!", {
      position: "top-right",
      autoClose: 300,
      transition: Flip,
    });
  };

  const render = todos.map((item) => {
    return (
      <li
        className="bg-slate-300 capitalize text-black rounded-xl py-2 px-4 sm:px-5 mb-2 flex justify-between items-center text-base sm:text-lg md:text-xl"
        key={item.id}
      >
        {item.title}
        <span
          className="text-lg sm:text-xl ml-2 cursor-pointer hover:scale-110 transition-all"
          onClick={() => DeleteHandler(item.id)}
        >
          🗑️
        </span>
      </li>
    );
  });

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-6 sm:mb-10 text-center">
        <span className="text-gray-600">You’ve</span> Added{" "}
        <span className="text-indigo-600">These</span>!
      </h1>
      <ol className="text-lg sm:text-xl md:text-2xl pl-4 sm:pl-6 font-thin list-decimal">
        {render}
      </ol>
    </div>
  );
};

export default Read;
