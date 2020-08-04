import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav>
      <ul id="mobileNav">
        <li>
          <NavLink to="/">Niko Sward</NavLink>
        </li>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img src={require('../images/burger.png')} alt="" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div>
              <NavLink to="/projects">Projects</NavLink>
            </div>
            <div>
              <NavLink to="/background">Background</NavLink>
            </div>
            <div>
              <NavLink to="/resume">Resume</NavLink>
            </div>
            <div>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
      <ul id="fullNav">
        <li>
          <NavLink to="/">Niko Sward - Full Stack Web Developer</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/background">Background</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
