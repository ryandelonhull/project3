import React, { Component } from 'react';
// import API from '../../utils/API';
import Charcards from '../CharCards/Charcards';
import axios from "axios";

class CharList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   search: '',
      characters: [],
    };
  }

  componentDidMount = () => {
      axios.get("api/characters/").then(response =>{
          this.setState({
              characters: response.data
          })
    })

  };

//   changeSearch = (event) => {
//     this.setState({ search: event.target.value });
//   };

  characterInfo = (info) => {
    console.log(info);
    const result = info;

    const character = result.map((stuff) => ({
      id: stuff.id,
     name: stuff.name,
      attacks: stuff.attacks,
      image: stuff.image,
   
    }));
    this.setState({ characters: character });
  };

//   characterData = () => {
//     const formattedString = this.state.search.replace(' ', '+');

//     API.getcharacters(formattedString)
//       .then((res) => this.characterInfo(res))
//       .then(console.log(this.state.search))
//       .catch((err) => console.log(err));
//   };

  render() {
    return (
      <div>
    
        <div className="container mt-3">
          <h4 className="mb-4 mt-2">Characters to Choose From</h4>
          <div className="container">
            {this.state.characters.map((character) => (
              <Charcards
                id={character.id}
                key={character.id}
                name={character.name}
                attacks={character.attacks}
                image={character.image}

              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CharList;