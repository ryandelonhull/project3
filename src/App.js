import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Battle from "./components/Battle/Battle";
import NavBar from "./components/BattleStyles/NavBar"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Project X - The Ultimate Battle!</h2>
          <NavBar/>
          {/* <Route path="/" exact component={Index} /> */}
          {/* <Route path="/Profile" component={Profile} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/User" component={User} />
          <Route path="/Battle" component={Battle} /> */}
          <Battle/>
        </div>
      </Router>
    );
  }
}
export default App;
