import React from 'react';

import './Navbar.css';

function Navbar(props) {
  return ( 
   <div>
     
      <nav className="navbar fixed-top navbar-expand-lg">
      <img src="https://i.ibb.co/VMjK21c/projectxlogo150x51.png" alt ="project x"/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active mr-sm-2" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="/App">Features</a>
      <a className="nav-link" href="/App">Pricing</a>
      <a className="nav-link disabled" href="/App" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
      {/* <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#Profile">
            About
          </a>

        </li>
        <li className="nav-item"> */}
          {/* /I just added profile here for now can change it later */}
          {/* <a className="nav-link" href="#Profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">
            Contact
          </a>

         
        </li>
      </ul> */}
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
