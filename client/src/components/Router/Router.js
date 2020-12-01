import { useHistory } from 'react-router-dom';
import React from 'react';

const SignUpButton = (props) => {
  const history = useHistory();

  const handleClick = () => history.push('/Profile');

  return (
    <div>
      <button type="button" onClick = {() => {
        handleClick();
        props.handleSignUp();
      }}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpButton;
