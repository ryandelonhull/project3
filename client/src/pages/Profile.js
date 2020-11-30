import React, { Component } from 'react';
import './page.css';
import axios from "axios";
// import characters from "../characters.json";
// components

import Navbar from '../components/Navbar/Navbar';

import Leaderboard from '../components/Leaderboard/leaderboard';
import Userdata from '../components/Userdata/userdata';
import Charcards from '../components/CharCards/Charcards';
import Battle from "../components/Battle/Battle";


const gameStates = {INITIAL: 1, CHOOSE_CHARACTER: 2, PLAYING: 3};



class Profile extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      gameState: gameStates.INITIAL,
      character: {},
      cpuCharacter: {},
      characters: []
    }
  }

  componentDidMount(){
   axios.get('/api/characters')
   .then((response)=>{
     this.setState({characters: response.data});
   })
   console.log(this.state.characters);
  }

  characterChoice = () =>{
    if(this.state.gameState === gameStates.INITIAL){

      this.setState({gameState: gameStates.CHOOSE_CHARACTER});
    }
  }

  selectCharacter = (character) =>{
    let randomIndex = Math.floor(Math.random() * this.state.characters.length);
    this.setState({character: character, cpuCharacter: this.state.characters[randomIndex], gameState: gameStates.PLAYING});
  }

  render() {

    const characterChoice = this.characterChoice;
    const selectCharacter = this.selectCharacter;
    return (

        <div>
            <div className="wrapper p-3" id="Profile">
               
                <div>
                  <div className="userdata">
                    <Userdata />
                  </div>
                  <div className="leaderboard">
                      {/* <Leaderboard /> */}

                  </div>
                  {this.state.gameState === gameStates.INITIAL && <button onClick={characterChoice}>Start Battle</button>}
                  {
                    this.state.gameState === gameStates.CHOOSE_CHARACTER && 
                    <Charcards characters={this.state.characters} selectCharacter={selectCharacter} />
                  }
                  {
                    this.state.gameState === gameStates.PLAYING && 
                    <Battle playerCharacter = {this.state.character} cpuCharacter = {this.state.cpuCharacter}/>
                  }
                </div>
            </div>
        </div>

    );
  }
}

export default Profile;
