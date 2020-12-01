import React from 'react';
import './Cards.css';

const RachaelWess = () => {
  return (
    <div className="contactContainer">
      <div className="float-left col-6">
        <h5>Rachael Kelm-Southworth</h5>
        {/* <img src="https://i.ibb.co/6ZNT2TW/Rachel.png" />  */}
        <img
          alt="rachael"
          className="photo"
          src={'https://i.ibb.co/6ZNT2TW/Rachel.png'}
        />
        <div>
          <p>Email: rkelmsouthworth@gmail.com</p>

          <p>Los Angeles, California</p>
          <a href="https://github.com/RKSouth">Github</a>
          <span> || </span>
          <a href="https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3">
            Connect on Linkedin
          </a>
          <span> || </span>
          <a href="https://rksouth.github.io/React-Portfolio/" id="Portfolio">
            View Portfolio
          </a>
        </div>
      </div>
      <div className="float-right col-6 mb-3">
        <h5>Earnest Wesson</h5>
        {/* <img src="https://i.ibb.co/mRBQYDD/WESS.png" />  */}
        <img
          alt="wess"
          className="photo"
          src={'https://i.ibb.co/mRBQYDD/WESS.png'}
        />
        <p>Email: ernestwesson86@gmail.com</p>

        <p>San Leandro, California</p>
        <a href="https://github.com/HEEM86">Github</a>
        <span> || </span>
        <a href="https://www.linkedin.com/in/ernest-wesson-b4183b5a/">
          Connect on Linkedin
        </a>
        <span> || </span>
        <a href="https://github.com/HEEM86/ReactPortfolio" id="Portfolio">
          View Portfolio
        </a>
      </div>
    </div>
  );
};

export default RachaelWess;
