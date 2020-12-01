import React from 'react';
import './Cards.css'

const JenRy = () => {
  return (
    <div className="contactContainer">
      <div className='float-left col-6'>
        <h5>Jennifer Henry</h5>
        <img
          alt="Jenn"
          className="photo"
          src={'https://i.ibb.co/bzpd6T5/Jenn.png'}
        />
        <p>Email: jenhenry1995@gmail.com</p>
        <p>Lafayette, CA</p>
        <a href="https://github.com/jenryhennifer">Github</a>
        <span> || </span>
        <a href="https://www.linkedin.com/in/jennifer-henry-4a540a149/edit/add-link/">
          Connect on Linkedin
        </a>
        <span> || </span>
        <a href="https://morning-ridge-20215.herokuapp.com/" id="Portfolio">
          View Portfolio
        </a>
      </div>

      <div className='float-right col-6'>
        <h5>Ry Hull</h5>
        {/* <img src="https://i.ibb.co/rpNZKm8/Ry.png" />   */}
        <img
          alt="Ry"
          className="photo"
          src={'https://i.ibb.co/rpNZKm8/Ry.png'}
        />
        <p>Email: Ryandelonhull@gmail.com</p>

        <p>Oakland, California</p>
        <a href="https://github.com/ryandelonhull">Github</a>
        <span> || </span>
        <a href="https://linkedin.com/in/ryan-hull-94003144">
          Connect on Linkedin
        </a>
        <span> || </span>
        <a
          href="https://ryandelonhull.github.io/Repo-React-ion/"
          id="Portfolio"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
}

export default JenRy;
