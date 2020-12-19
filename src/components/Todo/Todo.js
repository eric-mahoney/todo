import "./Todo.css";
import { FiXCircle, FiCheckCircle } from "react-icons/fi";

function Todo(props) {
  console.log("called todo!");
  return (
    <li className="todo-item">
      <p className="todo-title">{props.todo}</p>
      <div class="todo-btn-wrapper">
        <button class="btn todo-complete">
          <FiCheckCircle />
        </button>
        <button class="btn todo-delete">
          <FiXCircle />
        </button>
      </div>
    </li>
  );
}

export default Todo;
