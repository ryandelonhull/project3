import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
   <div>
      
      
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="App">
        {/* <img src={require("./projectxlogo.png")} alt="Navbar Image" /> */}
        <img src="https://i.ibb.co/2WsXzGW/projectxlogo.png" />
        {/* <img src="./projectxlogo.png" thumbnail /> */}
        
      <ul className="nav justify-content-end ml-auto">
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
      
      </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
