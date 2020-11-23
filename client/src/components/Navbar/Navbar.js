import React from 'react';

function Navbar() {
  return (
    <div>
        <h2>Project X</h2>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Leaderboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
