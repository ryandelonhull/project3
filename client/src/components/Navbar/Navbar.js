import React from 'react';

import './Navbar.css';

function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <img src="https://i.ibb.co/VMjK21c/projectxlogo150x51.png" alt="logo" />
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            {/* /I just added profile here for now can change it later */}
            <a className="nav-link" href={props.history.push('/Profile')}>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="App">
          {/* <img src={require("./projectxlogo.png")} alt="Navbar Image" /> */}
          {/* <img src="https://i.ibb.co/VMjK21c/projectxlogo150x51.png" /> */}
          {/* <img src="./projectxlogo.png" thumbnail /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
