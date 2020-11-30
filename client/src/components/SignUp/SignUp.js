import React, {Component} from 'react';
import './SignUp.css';

import API from '../../utils/API'
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state ={
      username: '',
      email: '',
      password: ''
    }
  }


  redirectToProfile = () => {
    const { history } = this.props;
    if(history) history.push('/Profile')
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


   handleSignUp = (event) => {
    event.preventDefault();
    API.saveUserData({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    console.log('CLICKED')
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
            onClick={() => {
              this.handleSignUp();
              this.redirectToProfile();
            }}

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
export default withRouter(SignUp);

