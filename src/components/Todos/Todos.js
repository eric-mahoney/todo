import "./Todos.css";
import Todo from "../Todo/Todo";
import { useParams } from "react-router-dom";

function Todos(props) {
  let { id } = useParams();
  if ((props.todos.length = 0)) {
    props.todos = [];
  }
  return (
    <ul className="todo-container">
      {props.todos.map((data) => {
        return <Todo todo={data} />;
      })}
    </ul>
  );
}

export default Todos;
