import React from 'react';

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>

      <div className="form-group">

        <label form="username">

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

     
     
      <button type="submit" >
        Login
      </button>
    </div>
  );
}

export default Login;
