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
      <div class="get-started">
        <div class="info-container">
          <h3>Ready to Get Started?</h3>
          <Link to="/list" class="link-btn">
            Create List
          </Link>
        </div>
        <div class="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2e546e"
              fill-opacity="1"
              d="M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,256C840,224,960,160,1080,154.7C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
