import React from 'react';

function Navbar() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">
      <img src="https://i.ibb.co/2WsXzGW/projectxlogo.png" alt="logo" style="width:40px;"> 
        
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
      </img>
      </a>
      </nav>
    </div>
  );
}

export default Navbar;
