import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-500 p-5 flex text-white">
      <Create />
      <Read />
    </div>
  );
};

export default App;
