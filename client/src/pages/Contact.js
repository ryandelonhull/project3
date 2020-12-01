import React, { Component } from 'react';
import './page.css';
import JenRy from '../components/ContactCards/JenRy';
import RachaelWess from '../components/ContactCards/RachaelWess'

// components

class Contact extends Component {
  render() {
    return (
      <div className='stylin'>
        <h1 className="contact">Contact</h1>
        <JenRy />
        <RachaelWess />
      </div>
    );
  }
}

export default Contact;
