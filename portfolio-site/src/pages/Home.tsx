// Home.tsx

import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="navbar"></div>
      <img className="profile-image" src="./assets/react.svg" />
      <div className="description">
        <p>
          Welcome to my portfolio! I am Neelak Ghosh, a passionate developer
          dedicated to creating awesome web applications.
        </p>
      </div>
      <div className="buttons-container">
        <Link to="/pages/About.tsx" className="button">
          About
        </Link>
        <Link to="/projects" className="button">
          Projects
        </Link>
      </div>
      <div className="footer">
        This Website was made in React and hosted on Home Server by me
      </div>
    </div>
  );
};

export default Home;
