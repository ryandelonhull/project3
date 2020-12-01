import React, { Component } from 'react';
import API from '../../utils/API';

class Leaderboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
     userData: [],

    };
 }
    componentDidMount = () => {
      API.saveWinner().then(response => {
          console.log("Your Component Did mount");
          console.log(response);
          const saveTemp = [];
          for (let i = 0; i <response.length ; i++){
              console.log(response[i])
              let saveRecord = {
                  id:response[i].id,
                  username:response[i].username,
                  email:response[i].email,
                  wins:response[i].wins,
                  losses:response[i].losses
              
              };
                 saveTemp.push(saveRecord);
          }
          this.setState({ userData: saveTemp});
          console.log(this.state.userData)
       
  
      })
  }

  renderLeaderTable() {
    return this.state.userData.map((userData, index) => {
        const { id, username, wins, losses} = userData
        return (
            
      <tr key={id} >
      {/* <td><img className="img-responsive" src={imageLinks} alt="folks"/></td> */}
      <td>{username}</td>
      <td>{wins}</td>
      <td>{losses}</td>
   

   </tr>
        )
    })
}




    render() {

        return (
            <div>
               
    <div className="wrapper">
      {/* <img  /> */}
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Leaderboard</h5>
          <table id='leaderboard' className="table">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Wins</th>
                    <th scope="col">Losses</th>
                </tr>
            </thead>
            <tbody>
                 {this.renderLeaderTable()}
           </tbody>
           </table>
        </div>
      </div>
    </div>
            
            </div>
        )
    }
}

export default Leaderboard;