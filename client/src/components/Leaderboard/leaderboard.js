import React, { Component } from "react";


class Leaderboard extends Component {
    state = {

        userData: {},
        allUsers: []
    };



    render() {

        return (
            <div>
               
    <div className="wrapper">
      {/* <img  /> */}
      <div className="card" >
        <div className="card-body">
          {/* <h5 className="card-title"></h5> */}
        
          <p className="card-text"></p>
          {/* <button className="btn" onClick={handleClick}>Save</button> */}
        </div>
      </div>
    </div>
            
            </div>
        )
    }
}

export default Leaderboard;