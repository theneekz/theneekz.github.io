import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Router>
        <ul>
          <li>
            <Link to="/">Niko Sward - Full Stack Web Developer</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/background">Background</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Router>
    </nav>
  );
};

export default Navbar;
