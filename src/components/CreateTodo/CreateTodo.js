import "./CreateTodo.css";

function CreateTodo() {
  return (
    <div className="createTodo-container">
      <input placeholder="Todo Name"></input>
      <button class="btn btn-create">Create</button>
    </div>
  );
}

export default CreateTodo;
