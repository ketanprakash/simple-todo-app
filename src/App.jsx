import './App.css'
import { useEffect, useState } from "react";

const App = () => {
    const [todoArr, setTodoArr] = useState([]);
    const [todoNumber, setTodoNumber] = useState(0);
    const [todo, setTodo] = useState("");

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if(todos !== null) {
            setTodoArr([...todos])
            setTodoNumber(todos[todos.length - 1].id);
        }
    }, [])

    return (
        <div className="App">
            <form
                className="todo-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    setTodoNumber(todoNumber + 1);
                    setTodoArr(prevTodoArr => {
                        const newTodoArr = [...prevTodoArr, {id: todoNumber, todo}];
                        localStorage.setItem('todos', JSON.stringify(newTodoArr));
                        return newTodoArr;
                    });
                    setTodo("");
                }}
            >
                <input 
                    type="text" 
                    name="todo"
                    placeholder="Todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    required
                />
                <input type="submit" value="Add" />
            </form>

            <div className="todo-container">
                {
                    todoArr.map(({id, todo}) => (
                        <div className="todo">
                            <p className="todo-content">{todo}</p>
                            <button 
                                className="delete"
                                onClick={() => {
                                    setTodoArr(prevTodoArr => {
                                        const newTodoArr = prevTodoArr.filter((todoObj) => id !== todoObj.id)
                                        localStorage.setItem('todos', JSON.stringify(newTodoArr));
                                        return newTodoArr;
                                    })
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App;