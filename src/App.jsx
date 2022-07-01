import "./App.css";
import { useRef } from "react";
import TodoForm from "./components/todo-form/todo-form.component";
import TodoContainer from "./components/todo-container/todo-container.component";
import useLocalStorage from "./custom-hooks/useLocalStorage";

const App = () => {
  const [todoArr, setTodoArr] = useLocalStorage('todos', []);
  const todoNumber = useRef(todoArr.length > 0 ? todoArr[todoArr.length - 1].id : 0);

  return (
    <div className="App">
      <TodoForm todoNumber={todoNumber} setTodoArr={setTodoArr} />

      <TodoContainer setTodoArr={setTodoArr} todoArr={todoArr} />
    </div>
  );
};

export default App;
