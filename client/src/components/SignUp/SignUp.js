import React, {Component} from 'react';
import './SignUp.css';
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state ={
      username: '',
      email: '',
      password: ''
    }
  }
  //changes the state based on the input 
  addUsername = (event) => {
    this.setState({username: event.target.value})
  }
  addEmail = (event) => {
    this.setState({email: event.target.value})
  }
  addPassword = (event) => {
    this.setState({password: event.target.value})
  }
  singUp = () => {
  }
  handleSignUp = () => {
  }
render(){
  return (
    <div className="text container">
      {/* <div className="ui inverted divider"></div> */}
      <div className="inverted segment" id="mainContainer">
        <h2>Sign Up</h2>
        {/* <div className="ui inverted divider"></div> */}
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
              onChange={this.addUsername}
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
              onChange={this.addEmail}
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
              onChange={this.addPassword}
            />
          </div>
          <div
            // style="display: none"
            // style="margin-top: 10px;"
          >
              <button
            type="submit"
             >
            Sign Up
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
}
export default SignUp;