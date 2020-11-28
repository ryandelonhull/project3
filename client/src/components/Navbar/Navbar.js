import React from 'react';
import "./Navbar";


function Navbar() {
  return (
    <div>
      
      <div className="App">
        <img src={require('./projectxlogo.png')} />
      
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      
        
      <ul className="nav justify-content-end">
        <li className="nav-item">
          {/* <a className="nav-link active" href="#">
            About
          </a> */}
        </li>
        <li className="nav-item">
          {/* /I just added profile here for now can change it later */}
          <a className="nav-link" href="#Profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">
            Contact
          </a>
         
        </li>
      </ul>
      
     
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
