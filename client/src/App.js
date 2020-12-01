import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Battle from './components/Battle/Battle';
import LoginSignUP from './pages/LoginSignUP';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Jumbo from './components/Jumbo/Jumbo';
import Login from './components/Redir/Loginbttn';
import './App.css'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div  className="container">
          <Jumbo />
          </div>
          <div  className="container">
          <Login />
          </div>
         

          {/* Switch paths for the URL */}
          <Switch>

            {/* <Route path="/" exact component={LoginSignUP} />
            <Route path="/Profile" component={Profile} /> */}
            {/*<Route path="/Signup" component={Signup} /> */}
            <Route path="/" component={Contact} />
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
