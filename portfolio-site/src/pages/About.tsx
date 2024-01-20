import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        Hello! I'm [Your Friend's Name], a passionate [Your Friend's Profession]
        based in [Location].
      </p>

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
          guided me throughout my career and is a cornerstone of how I approach
          my projects.
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
  );
};

export default About;
