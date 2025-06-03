import { nanoid } from "nanoid";
import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: nanoid(), title: "Kaam karle bhaii!", isCompleted: false },
  ]);

  return (
    <div className="w-screen h-screen bg-gray-500 p-5 flex text-white">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
