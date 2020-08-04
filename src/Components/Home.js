import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div className="homeContainer">
        <h1>Howdy</h1>
        <div className="homeRow">
          <h3>
            <big>I'm Niko,</big> a full stack software engineer with
            professional experience in education and music. Being a lifelong fan
            of solving logic puzzles and having a history of building creative
            projects led me to tackle Harvard's CS50 course while teaching music
            full time. I impressed my developer friends with my work and they
            encouraged me to apply to Fullstack Academy's immersive software
            engineering program, where I pursued programming full-time.
          </h3>
          <h3>
            <big>Proficiencies:</big> Node.js, Express, React, Databases using
            SQL, JavaScript (ES6), HTML5/CSS, Redux, JSX, Git, AJAX, JSON,
            Tone.js, Jasmine, Mocha, Chai, and various APIs.{' '}
          </h3>
          <h3>
            <big>Knowledgeable in:</big> C, Python, Swift, Firebase, AWS (EC2),
            Travis CI, Webpack, Babel, Socket.io and Raspberry Pi OS.
          </h3>
        </div>
        <NavLink to="/projects">
          <h1>See my projects!</h1>
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
