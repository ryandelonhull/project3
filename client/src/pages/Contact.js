import React, { Component } from 'react';
import './page.css';


// components



class Contact extends Component {
  render() {
    return (
        <div className="container col-sm-10 col-md-8 col-lg-8 mr-20 ml-2>" id="Contact">
        <div className="card-row">
          <div className="card-body">
            <h3 className="card-title">Contact</h3>
            <hr className="my-4" />
            <h5>Jennifer Henry</h5>
            <p>
              Email: jenhenry1995@gmail.com
            </p>
          
            <p>Lafayette, CA</p>
            <a href="https://github.com/jenryhennifer">Github</a>
              <span> || </span>
              <a href="https://www.linkedin.com/in/jennifer-henry-4a540a149/edit/add-link/">Connect on Linkedin</a>
              <span> || </span>
              <a href="https://morning-ridge-20215.herokuapp.com/" id ="Portfolio">View Portfolio</a>
            
              <hr className="my-4" />
            <h5>Ry Hull</h5>
            <p>
              Email: Ryandelonhull@gmail.com
            </p>
          
            <p>Oakland, California</p>
            <a href="https://github.com/ryandelonhull">Github</a>
              <span> || </span>
              <a href="https://linkedin.com/in/ryan-hull-94003144">Connect on Linkedin</a>
              <span> || </span>
              <a href="https://ryandelonhull.github.io/Repo-React-ion/" id ="Portfolio">View Portfolio</a>
            
         
         
            <hr/>
            <h5>Rachael Kelm-Southworth</h5>
            <p>
              Email: rkelmsouthworth@gmail.com
            </p>
          
            <p>Los Angeles, California</p>
            <a href="https://github.com/RKSouth">Github</a>
              <span> || </span>
              <a href="https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3">Connect on Linkedin</a>
              <span> || </span>
              <a href="https://rksouth.github.io/React-Portfolio/" id ="Portfolio">View Portfolio</a>
            
         
           
     
            <hr className="my-4" />
            <h5>Earnest Wesson</h5>
            <p>
              Email: ernestwesson86@gmail.com
            </p>
          
            <p>San Leandro, California</p>
            <a href="https://github.com/HEEM86">Github</a>
              <span> || </span>
              <a href="https://www.linkedin.com/in/ernest-wesson-b4183b5a/">Connect on Linkedin</a>
              <span> || </span>
              <a href="https://github.com/HEEM86/ReactPortfolio" id ="Portfolio">View Portfolio</a>
            
         
            <hr className="my-4" />
           
              
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;