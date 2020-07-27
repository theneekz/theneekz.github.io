import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <Router>
        <div className="homeContainer">
          <h1>Howdy</h1>
          <div className="homeRow">
            <h3>
              I am Niko, a full stack software engineer with professional
              experience in education and music. Being a lifelong fan of solving
              logic puzzles and having a history of building creative projects
              led me to tackle Harvard's CS50 course while teaching music full
              time. I impressed my developer friends with my work and they
              encouraged me to apply to Fullstack Academy's immersive software
              engineering program, where I pursued programming full-time.
            </h3>
            <h3>
              As a developer I bring my unique strengths from working in varied
              professional environments to any sized team. I take pride in
              meeting deadlines and being flexible in fast-paced environments.
              Patience and empathy are the traits my peers have affirmed the
              most throughout my career. My communication skills that developed
              from teaching students in grades Preschool - 12th, writing daily
              charting narratives for parents, as well as through creating event
              recaps for clients in radio, have served me in and out of my
              professional life. I am passionate about cultivating wellness and
              value an animated workplace culture.
            </h3>
            <h3>
              Proficiencies: Node.js, Express, React, Databases using SQL,
              JavaScript (ES6), HTML5/CSS, Redux, JSX, Git, AJAX, JSON, Tone.js,
              Jasmine, Mocha, Chai, and various APIs. Knowledgeable in: C,
              Python, Java, Swift, Firebase, AWS (EC2), Travis CI, Webpack,
              Babel, Socket.io and Raspberry Pi OS.
            </h3>
          </div>
          <Link to="/projects">
            <h1>See my projects!</h1>
          </Link>
        </div>
      </Router>
    </section>
  );
};

export default Home;
