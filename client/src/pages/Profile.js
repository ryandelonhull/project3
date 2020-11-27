import React, { Component } from 'react';
import './page.css';

// components
import Navbar from '../components/Navbar/Navbar';
import Leaderboard from '../components/Leaderboard/leaderboard'
import Userdata from '../components/Userdata/userdata'




class Profile extends Component {
  render() {
    return (
      <div>
      <Navbar />
      </div>
    );
  }
}

export default Profile;
