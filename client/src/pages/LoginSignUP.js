import React, { Component } from 'react';
import './page.css';

// components
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import About from '../components/About/About';


class LoginSignUp extends Component {
  render() {
    return (
      <div>
        <About />
        {/* Login sign up components go here */}
        <div className="wrapper p-3">
          <div className="login">
            <Login />
          </div>
          <div className="signUp">
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSignUp;
