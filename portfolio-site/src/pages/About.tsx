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
          <div className="image-container">
            <img className="about-image" src="/puppycuddle.png" />
            <p>(I'm on the right! The beautiful dog isn't mine)</p>
          </div>
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Venturing beyond the confines of my professional life, here's a more
            nuanced snapshot of who I am:
          </p>
        </div>
        <div className="grid-container">
          <section className="about-section-1">
            <h3>Tech Enthusiast and Musician:</h3>
            <p>
              While I navigate the digital landscape as a tech enthusiast
              proficient in languages like C, C++, Python, and more, there's a
              contrasting harmony to my off-screen world. I'm a bassist, deeply
              immersed in the realms of jazz, funk, and rock. The strings of my
              bass guitar resonate with the same vibrancy that fuels my coding
              endeavors.
            </p>
          </section>

          <section className="about-section-2">
            <h3>Passion for Coding and Networks:</h3>
            <p>
              Coding isn't just a job for me; it's a passion. I find joy in
              crafting elegant solutions, and my love for coding extends to
              working on networks and self-hosting. The digital realm is not
              merely a workplace but a canvas for my creativity and
              problem-solving skills.
            </p>
          </section>

          <section className="about-section-3">
            <h3>Academic Journey:</h3>
            <p>
              Equipped with a B.Tech major in Computer Science and an MBA major
              in Marketing (with a minor in Business Analytics), I've seamlessly
              merged technical expertise with strategic marketing insights. My
              academic journey has been complemented by real-world experiences,
              each role contributing to my growth and proficiency in diverse
              domains.
            </p>
          </section>

          <section className="about-section-4">
            <h3>Versatility in Interests:</h3>
            <p>
              My multifaceted interests extend to driving, gaming, and reveling
              in the captivating worlds of anime and manga. The thrill of the
              road, the strategic nuances of gaming, and the immersive
              narratives of anime fuel my sense of exploration and creativity.
            </p>
          </section>

          <section className="about-section-5">
            <h3>Coffee Break Chronicles:</h3>
            <p>
              Amidst my dynamic pursuits, there's always time for a coffee
              break. Whether delving into lines of code or pondering over
              marketing strategies, the rich aroma and comforting warmth of
              coffee serve as constant companions.
            </p>
          </section>
          <section className="about-section-6">
            <h3>Motivation and Career Aspirations:</h3>
            <p>
              I am driven by an innate motivation to learn and adapt,
              continuously acquiring new skills and staying at the forefront of
              industry trends. My career aspirations revolve around the
              intersection of technology, data, and strategic marketing. I
              thrive in dynamic environments, leveraging my skills to contribute
              meaningfully to innovative projects and initiatives.
            </p>
          </section>
        </div>
        <div className="empty-div-1" />
      </div>
    </div>
  );
};

export default About;
