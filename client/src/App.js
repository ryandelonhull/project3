import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Battle from './components/Battle/Battle';
import LoginSignUP from './pages/LoginSignUP';
import Navbar from './components/Navbar/Navbar';

import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Jumbo from './components/Jumbo/Jumbo'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />

          <Jumbo />
          {/* <About /> */}
         

          <Battle/>

          <Switch>
            <Route path="/" exact component={LoginSignUP} />
            <Route path="/Profile" component={Profile} />
          {/*<Route path="/Signup" component={Signup} /> */}
          <Route path="/Contact" component={Contact} />
          {/* <Route path="/About" component={About} /> */}
          {/* <Route path="/User" component={User} /> */}

          <Route path="/Battle" component={Battle} />

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
