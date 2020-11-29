import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="ui text container">
      <div className="ui inverted divider"></div>
      <div className="ui inverted segment" id="mainContainer">
        <h2>Sign Up</h2>
        <div className="ui inverted divider"></div>
        <form className="signup">
          <div className="form-group">
            <label form="username">
              <h4> Username </h4>
            </label>
            <input
              type="username"
              className="form-control"
              id="username-input"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label form="exampleInputEmail1">
              <h4>Email address</h4>
            </label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label form="exampleInputPassword1">
              <h4>Password</h4>
            </label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              placeholder="Password"
            />
          </div>
          <div
            // style="display: none"
            id="alert"
            className="alert alert-danger"
            role="alert"
            // style="margin-top: 10px;"
          >
            <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Error:</span>{' '}
            <span className="msg"></span>
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            // style="margin-top: 15px;"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
