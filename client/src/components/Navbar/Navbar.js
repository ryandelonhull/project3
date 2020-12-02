import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  };
  const handleContactClick = () => {
    history.push('/Contact');
  };
  

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand">
        <img src="./Images/projectxlogo.png" alt="logo" />
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/Contact"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#signup" onClick={handleHomeClick}>
              Sign Up/Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
