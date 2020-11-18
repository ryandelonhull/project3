import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Project X - The Ultimate Battle!</h2>
          <Route path="/" exact component={Index} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/User" component={User} />
          <Route path="/Battle" component={Battle} />
        </div>
      </Router>
    );
  }
}
export default App;
