import React, { Component } from 'react';
import API from '../../utils/API';

class Leaderboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
     userData: [],
     order: "ascend",

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

headings = [
  { name: "Username"}, 
  { name: "Wins"},
  { name: "Losses"},  
]

sorting = heading => {

    if (this.state.order === "descend") {
        this.setState({order: "ascend" })
    } else {
        this.setState({order: "descend"})}
    const compare = (a,b) => {
     console.log(a[heading])
        if (this.state.order === "ascend") {
            if (a[heading]=== undefined) {
                return 1
            } else if (b[heading] === undefined) {
                return -1
            } else if (heading === "wins") {
               console.log(a[heading].wins)
                return a[heading].wins.localeCompare(b[heading].wins)
            } else {
               console.log("age")
                return a[heading] -b[heading]
            }
        } else {
            if (a[heading]=== undefined) {
                return 1
            } else if (b[heading] === undefined) {
                return -1
            } else if (heading === "wins") {
                return b[heading].wins.localeCompare(a[heading].wins)
            } else {
               //this returns age
                return b[heading] -a[heading]
            }
        }
    }
    const sortedEmployees = this.state.userData.sort( compare );
    this.setState({userData: sortedEmployees})
      
}

renderHeader() {
    
  return (this.headings.map((heading, index) => {
     const { name, width } = heading
     console.log(name);
     return(   
          <th scope="col"
          
            // checked={this.state.sorted}
            onClick={() => {this.sorting(name.toLowerCase())}}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            
           >
              {name}
              <span> (sort)</span>
          </th>
     )        
  }))
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