import { nanoid } from "nanoid";
import { createContext, useState } from "react";
export const todocontext = createContext(null);

const Wrapper = (props) => {
  
    const [todos, settodos] = useState([
    { id: nanoid(), title: "Kaam karle bhaii!", isCompleted: false },
  ]);

  return (
    <todocontext.Provider value={[todos, settodos]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
