import React from 'react';

function Navbar() {
  return (
    <div>
        <h2>Project X</h2>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            About
          </a>
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
  );
}

export default Navbar;
