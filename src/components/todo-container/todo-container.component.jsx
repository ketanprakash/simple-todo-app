import Todo from "../todo/todo.component";

const TodoContainer = ({ setTodoArr, todoArr }) => {
  return (
    <div className="todo-container">
      {todoArr.map(({ id, todo }) => (
        <Todo todo={todo} setTodoArr={setTodoArr} key={id} id={id} />
      ))}
    </div>
  );
};

export default TodoContainer;
