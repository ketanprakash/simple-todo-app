import { useState } from "react";

const TodoForm = ({setTodoNumber, todoNumber, setTodoArr}) => {
    const [todoInput, setTodoInput] = useState("");
    return (
        <form 
        className="todo-form" 
        onSubmit={e => {
            e.preventDefault();
            setTodoNumber(todoNumber + 1);
            setTodoArr(prevTodoArr => {
                const newTodoArr = [...prevTodoArr, {id: todoNumber,todo: todoInput}];
                    localStorage.setItem('todos', JSON.stringify(newTodoArr));
                    return newTodoArr;
                });
                setTodoInput("");
            }}
            >
            <input type="text" name="todo" placeholder="Todo" value={todoInput} onChange={e => setTodoInput(e.target.value)} required />
            <input type="submit" value="Add" />
        </form>
    );
}

export default TodoForm;