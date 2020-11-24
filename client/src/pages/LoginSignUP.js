import React, { Component } from 'react';
import './page.css';


// components
import Login from '../components/Login/Login';


class LoginSignUp extends Component {
  render() {
    return (
      <div>
          
        {/* Login sign up components go here */}
        <div className="wrapper">
          <div className='login'>
            <Login />
          </div>
          <div className='signUp'>
          {/* <SignUp /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSignUp;
