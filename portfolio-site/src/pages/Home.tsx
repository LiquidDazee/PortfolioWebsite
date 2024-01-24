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
        <Link to="/about" className="button1">
          ABOUT
        </Link>
        <Link to="/projects" className="button1">
          PROJECTS
        </Link>
      </div>
      <a href="/Neelak_CV.pdf" download className="button1">
        Download CV
      </a>
      <div className="contact-links">
        <a
          href="mailto:neelakghoshwork@gmail.com"
          className="email"
          target="_blank"
        >
          <img className="email" src="/icons/email.png" />
        </a>
        <a
          href="https://github.com/LiquidDazee"
          className="github"
          target="_blank"
        >
          <img className="github" src="/icons/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/neelakghosh"
          className="linkedin"
          target="_blank"
        >
          <img className="email" src="/icons/linkedin.png" />
        </a>
      </div>
      <div className="footer">
        This Website was made in React and hosted on home server by me.
      </div>
    </div>
  );
};

export default Home;
