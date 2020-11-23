import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Battle from './components/Battle/Battle';
import LoginSignUp from './pages/LoginSignUP';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={LoginSignUp} />
            {/* <Route path="/Profile" component={Profile} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/User" component={User} />
          <Route path="/Battle" component={Battle} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
