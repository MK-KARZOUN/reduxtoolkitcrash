import "./App.css";
import RenderTodos from "./components/RenderTodos";
import AddTodo from "./components/AddTodo";
import LengthOfTodos from "./components/LengthOfTodos";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <RenderTodos />
      <LengthOfTodos />
    </div>
  );
}

export default App;
