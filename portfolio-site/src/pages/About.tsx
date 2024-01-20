import React from "react";
import { Link } from "react-router-dom";
import { Spotify } from "react-spotify-embed";
import "../App.css";
import "./Pages.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="navbar"></div>
      <div className="container">
        <h1>Hi, I'm Neelak Ghosh!</h1>
        <div className="section">
          <div className="written-section">
            <p>
              Hello! I'm Neelak Ghosh, a passionate developer with a background
              in Computer Science and Marketing. An avid learner, bassist, and
              technology enthusiast, I bring fresh ideas, creative thinking, and
              loads of energy to the table. My journey in the tech and marketing
              realms has been fueled by an insatiable curiosity, a passion for
              learning, an unwavering commitment to innovation, and an eternal
              love for coffee. <br />
              <br />
              Here’s a song I think best describes me currently!
            </p>
            {/* <Spotify link="https://open.spotify.com/track/3zJRvtQkHQRTNEXSY8jQPR?si=ec428547de3f4939" /> */}
          </div>
          <img className="about-image" src="../../public/puppycuddle.png" />
        </div>

        <section className="about-section">
          <h2>My Journey</h2>
          <p>
            I started my journey in [Year] when I [describe how your friend
            started in their profession]. Since then, I've worked at [Previous
            Employers] and completed [Number] projects that I'm really proud of.
          </p>
        </section>

        <section className="about-section">
          <h2>My Philosophy</h2>
          <p>
            I believe in [Your Friend's Work Philosophy]. This philosophy has
            guided me throughout my career and is a cornerstone of how I
            approach my projects.
          </p>
        </section>

        <section className="about-section">
          <h2>Let's Connect</h2>
          <p>
            Interested in working together or learning more about my work? Feel
            free to <Link to="/contact">contact me</Link> or connect with me on
            social media.
          </p>
          {/* Social media links can be added here */}
        </section>

        <nav className="back-to-home">
          <Link to="/">Back to Home</Link>
        </nav>
      </div>
    </div>
  );
};

export default About;
