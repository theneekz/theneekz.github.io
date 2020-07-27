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
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/background" component={Background} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <div className="credit">
          This background image was created by the wonderful artist{' '}
          <a href="https://www.facebook.com/spit.city.media/">spit.city</a>
        </div>
      </Router>
    </div>
  );
}

export default App;
