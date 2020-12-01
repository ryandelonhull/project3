import React from 'react';
import './Jumbo.css';

const Jumbo = () => {
  return (
    <div className="row-1">
      <div>
        <div className="jumbotron img-fluid">
          <img
            src="https://i.ibb.co/PhV3Jwx/project-Xjumbo.png"
            className="img-fluid"
            id="jumboimg"
            alt="project x with batman and obama"
          />
          {/* <a className="btn btn-lg" href="#" role="button"></a> */}
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
