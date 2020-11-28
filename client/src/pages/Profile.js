import React, { Component } from 'react';
import './page.css';

// components
import Navbar from '../components/Navbar/Navbar';
import Leaderboard from '../components/Leaderboard/leaderboard'
import Userdata from '../components/Userdata/userdata'
import Charcards from '../components/CharCards/Charcards';





class Profile extends Component {
  render() {
    return (
        <div>
            <div className="wrapper p-3" id="Profile">
                <Navbar />
                <div>
             <div className="userdata">
                <Userdata />
          </div>
          <div className="leaderboard">
            {/* <Leaderboard /> */}
            <Charcards />

          </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Profile;
