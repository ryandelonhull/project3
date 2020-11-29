import React from 'react';

function Login() {
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
          id="password-input"
          placeholder="Password"
        />
      </div>

      <div id="alert" className="alert alert-danger" role="alert">
        <span
          className="glyphicon glyphicon-exclamation-sign"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Error:</span> <span className="msg"></span>
      </div>

      <button type="submit" className="btn btn-secondary">
        Login
      </button>
    </div>
  );
}

export default Login;
