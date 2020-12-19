import "./List.css";
import CreateTodo from "../CreateTodo/CreateTodo";

function List(props) {
  let todoList = localStorage.getItem(`todos`);
  if (todoList == null) {
    todoList = "You haven't created any lists yet. Use the button below to create one.";
  }
  console.log(todoList);
  return (
    <div className="list-container">
      <h2>Here are all of the todo lists you've created</h2>
      <p> {todoList} </p>
      <CreateTodo />
    </div>
  );
}

export default List;
