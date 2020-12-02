import React, { Component } from 'react';
import API from '../../utils/API';


class Userdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userData: [],
      order: 'ascend',
    };
  }
  componentDidMount = () => {
    API.saveWinner().then((response) => {
      console.log('Your Component Did mount');
      console.log(response);
      const saveTemp = [];
      for (let i = 0; i < response.length; i++) {
        console.log(response[i]);
        let saveRecord = {
          id: response[i].id,
          username: response[i].username,
          email: response[i].email,
          wins: response[i].wins,
          losses: response[i].losses,
        };
        saveTemp.push(saveRecord);
      }
      this.setState({ userData: saveTemp });
      console.log(this.state.userData);
    });
  };

  renderLeaderTable() {
    const user = localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
    const results = this.state.userData.filter(
      (username) => username.username === user
    );
    console.log(results);
    // localStorage.setItem("user", results)
    return results.map((userData, index) => {
      const { id, username, wins, losses } = userData;
      return (
        <tr key={id}>
          {/* <td><img className="img-responsive" src={imageLinks} alt="folks"/></td> */}
          <td>{username}</td>
          <td>{wins}</td>
          <td>{losses}</td>
        </tr>
      );
    });
  }

  headings = [{ name: 'Username' }, { name: 'Wins' }, { name: 'Losses' }];

  sorting = (heading) => {
    if (this.state.order === 'descend') {
      this.setState({ order: 'ascend' });
    } else {
      this.setState({ order: 'descend' });
    }
    const compare = (a, b) => {
      console.log(a[heading]);
      if (this.state.order === 'ascend') {
        if (a[heading] === undefined) {
          return 1;
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else {
          //this returns age
          return b[heading] - a[heading];
        }
      }
    };
    const sortedEmployees = this.state.userData.sort(compare);
    this.setState({ userData: sortedEmployees });
  };

  renderHeader() {
    return this.headings.map((heading, index) => {
      const { name } = heading;
      console.log(name);
      return (
        <th
          scope="col"
          key={`user-data-headings-${index}`}
          // checked={this.state.sorted}
          onClick={() => {
            this.sorting(name.toLowerCase());
          }}
          className="react-switch-checkbox"
          id={`react-switch-new`}
        >
          {name}
          {/* <span>(sort)</span> */}
        </th>
      );
    });
  }

  render() {
    return (
      <div>
        {/* <img  /> */}
        <div className="card" style={{ backgroundColor: 'black' }}>
          <h1>Your Stats</h1>
          <div className="card-body">
            <table
              id="leaderboard"
              className="table"
              style={{ color: 'white' }}
            >
              <thead>
                <tr>{this.renderHeader()}</tr>
              </thead>
              <tbody>{this.renderLeaderTable()}</tbody>
            </table>
            <span>
              <p>Click On Wins and Losses to Sort</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Userdata;