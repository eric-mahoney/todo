import "./Home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home-container">
      <div className="flex-container">
        <div className="text-container">
          <h2>Welcome to TODO!</h2>
          <p>It is time to ditch those other outdated todo lists.</p>
        </div>
        <div className="hero-img img-container"></div>
      </div>
      <div className="flex-container">
        <div className="info-img img-container"></div>
        <div className="text-container">
          <h2>100% up-time</h2>
          <p>TODO is a progressive web app, so anytime you need to write down your thoughts, you can do that. Even if you're offline.</p>
        </div>
      </div>
      <div className="flex-container">
        <div className="text-container">
          <h2>Advanced Features</h2>
          <p>Add and sort notes using our advanced algorithms.</p>
        </div>
        <div className="notes-img img-container"></div>
      </div>
    </div>
  );
}

export default Home;
