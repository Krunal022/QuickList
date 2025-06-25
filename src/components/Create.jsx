import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
    toast("🦄 Task Added!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });

    reset();
  };

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-8 sm:mb-10 text-center">
        Just <span className="text-blue-400">add</span> and{" "}
        <span className="text-red-400">delete</span> — that’s it.
      </h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title can not be empty!" })}
          className="capitalize border-b w-full outline-0 pl-4 sm:pl-6 p-3 sm:p-4 text-xl sm:text-2xl font-thin rounded-4xl"
          type="text"
          placeholder="Add Your Title! "
        />
        <small className="text-red-400 block mb-4 sm:mb-6 ml-3 sm:ml-5 mt-2">
          {errors?.title?.message}
        </small>

        <button className="px-4 sm:px-5 py-2 font-extralight rounded text-xl sm:text-3xl border cursor-pointer transition-all hover:bg-black hover:text-white">
          Add the task
        </button>
      </form>
    </div>
  );
};

export default Create;
