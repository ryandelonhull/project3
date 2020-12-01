import React, { Component } from 'react';
import API from '../../utils/API';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  //what happens when you click login
  loginData = () => {
    API.checkUserData();
  };

  //changes the state based on the input
  addUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  addPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <div className="form-group">
          <label for="username">
            <h4> Username </h4>
          </label>
          <input
            type="username"
            className="form-control"
            // style=" margin-top: 5px"
            id="username-input"
            placeholder="Username"
            onChange={this.addUsername}
          />
        </div>
        <div
          className="form-group"
          // style="margin-top: 10px"
        >
          <label form="password">
            <h4>Password</h4>
          </label>
          <input
            type="password"
            className="form-control"
            id="password-input2"
            placeholder="Password"
            onChange={this.addPassword}
          />
        </div>
        <div>
          <button type="submit"
          onClick={this.loginData}>Login</button>
          {/* <span
          className="glyphicon glyphicon-exclamation-sign"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Error:</span> <span className="msg"></span> */}
        </div>
      </div>
    );
  }
}
export default Login;
