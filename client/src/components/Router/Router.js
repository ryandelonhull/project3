import { useHistory } from 'react-router-dom';
import React from 'react';

const SignUpButton = () => {
  const history = useHistory();

  const handleClick = () => history.push('/Profile');

  return (
    <div>
      <button type="button" onClick={ handleClick }>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpButton;
