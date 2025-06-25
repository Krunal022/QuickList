import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-500 p-4 flex flex-col md:flex-row items-start justify-center gap-6 text-white">
      <Create />
      <Read />
    </div>
  );
};

export default App;
