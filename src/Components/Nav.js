import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mobileDropDisplay: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      mobileDropDisplay: !state.mobileDropDisplay,
    }));
  }
  render() {
    return (
      <section>
        <nav>
          <ul id="mobileNav">
            <li>
              <NavLink to="/">Niko Sward</NavLink>
            </li>

            <div onClick={this.handleClick}>
              <img src={require('../images/burger.png')} alt="" />
            </div>
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
        {this.state.mobileDropDisplay && (
          <section className="mobileDrop" onClick={this.handleClick}>
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
          </section>
        )}
      </section>
    );
  }
}

export default Navbar;
