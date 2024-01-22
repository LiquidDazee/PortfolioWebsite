// Home.tsx

import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* <div className="navbar"></div> */}
      <img className="profile-image" src="/neelak2.png" />
      <div className="name">NEELAK GHOSH</div>
      <div className="description">
        <p>
          Welcome to my portfolio! I am Neelak Ghosh, a passionate developer
          dedicated to creating awesome web applications.
        </p>
      </div>
      <div className="buttons-container">
        <Link to="/about" className="button">
          ABOUT
        </Link>
        <Link to="/projects" className="button">
          PROJECTS
        </Link>
      </div>
      <div className="footer">
        This Website was made in React and hosted on home server by me
      </div>
    </div>
  );
};

export default Home;
