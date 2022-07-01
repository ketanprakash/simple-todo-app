const Todo = ({ todo, setTodoArr, id }) => {
  return (
    <div className="todo">
      <p className="todo-content">{todo}</p>
      <button
        className="delete"
        onClick={() => {
          setTodoArr((prevTodoArr) => {
            const newTodoArr = prevTodoArr.filter(
              (todoObj) => id !== todoObj.id
            );
            return newTodoArr;
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
