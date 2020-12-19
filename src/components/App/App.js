import "./App.css";
import Navbar from "../Navbar/Navbar";
import Todos from "../Todos/Todos";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../List/List";

function App() {
  const todos = ["Hello", "Todo", "Do this"];
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo/:id" component={Todos} />
          <Route path="/list" component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
