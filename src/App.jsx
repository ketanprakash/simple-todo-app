import './App.css'
import { useEffect, useState, useRef } from "react";
import TodoForm from './components/todo-form/todo-form.component';
import TodoContainer from './components/todo-container/todo-container.component';

const App = () => {
    const [todoArr, setTodoArr] = useState([]);
    const todoNumber = useRef(0);
    
    useEffect(() => {
        const todosJson = localStorage.getItem('todos');
        if(todosJson) {
            const todos = JSON.parse(todosJson);
            setTodoArr([...todos])
            todoNumber.current = todos.length > 0 ? todos[todos.length - 1].id : 0;
        }
    }, [])
    
    return (
        <div className="App">
            <TodoForm todoNumber={todoNumber} setTodoArr={setTodoArr}/>

            <TodoContainer setTodoArr={setTodoArr} todoArr={todoArr}/>
        </div>
    )
}
  
export default App;