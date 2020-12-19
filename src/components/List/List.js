import "./List.css";

function List(props) {
  let todoList = localStorage.getItem(`todos`);
  if (todoList == null) {
    todoList = "Sorry, you have not created any todo lists yet.";
  }
  console.log(todoList);
  return (
    <div className="list-container">
      <h2>Here are all of the todo lists you've created</h2>
      <p> {todoList} </p>
    </div>
  );
}

export default List;
