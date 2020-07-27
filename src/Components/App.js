import React from 'react';
import '../App.css';
import Navbar from './Nav';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';
import Background from './Background';

function App() {
  console.log(
    'Thanks for visiting my page! For a special surprise go to /song'
  );
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/background" component={Background} />
          </Switch>
        </Router>
      </div>
      <div className="credit">
        This background image was created by the wonderful artist{' '}
        <a href="https://www.facebook.com/spit.city.media/">spit.city</a>
      </div>
    </div>
  );
}

export default App;
