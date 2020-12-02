import React, { Component } from 'react';
import './page.css';

// components
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import About from '../components/About/About';
import Loginbttn from '../components/Redir/Loginbttn';

class LoginSignUp extends Component {
  render() {
    return (
      <div>
        <Loginbttn />
        <About />
        {/* Login sign up components go here */}
        <div className="wrapper loginSignUp p-3">
            <Login />
            <SignUp />
        </div>
      </div>
    );
  }
}

export default LoginSignUp;
