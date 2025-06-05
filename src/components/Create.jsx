import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";
import { Toastify } from "toastify";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // e.preventDefault();
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);

    //newTodo is Created when you submit the data
    // const newTodo = { id: data.nanoid(), title: title, isCompleted: isCompleted };
    // console.log(newTodo);

    //Add that data into TodoList
    // const copyTodos = [...todos];
    // copyTodos.push(newTodo);
    // settodos(copyTodos);
    // settodos([...todos] , newTodo);

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
    toast("🦄 Task Added!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });

    // settitle("");
    reset();
  };
  return (
    <div className="w-[50%] p-10">
      <h1 className="text-5xl font-thin mb-10">
        Just <span className="text-blue-400">add</span> and{" "}
        <span className="text-red-400">delete</span> — that’s it.
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title can not be empty!" })}
          className="capitalize border-b w-full outline-0 pl-7 p-4 text-2xl font-thin rounded-4xl"
          type="text"
          placeholder="Add Your Title! "
        />
        <small className="text-red-400 block mb-6 ml-5 mt-2">
          {errors?.title?.message}
        </small>

        <button className="px-5 py-2 cursor-pointer font-extralight rounded m-2 text-3xl decoration-none border-1">
          Add the task
        </button>
      </form>
    </div>
  );
};

export default Create;
