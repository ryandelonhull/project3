import React, { Component } from 'react';
// import './page.css';
import Leaderboard from "../components/Leaderboard/leaderboard"
import characters from "../characters.json";
import attacks from "../attacks.json";
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
      characters: characters,
      characterAttacks: [],
      cpuAttacks:[]
    }
  }


//function for displaying the character 
  characterChoice = () =>{
    if(this.state.gameState === gameStates.INITIAL){


      this.setState({gameState: gameStates.CHOOSE_CHARACTER});
    }
  }

  selectCharacter = (character) =>{
    let randomIndex = Math.floor(Math.random() * this.state.characters.length);
    const tempAttacks = attacks.filter( (attack)=>{
      return attack.CharacterId === character.id
    })
    const tempCpuAttacks = attacks.filter( (attack)=>{
      return attack.CharacterId = this.state.characters[randomIndex].CharacterId
    })

    this.setState({characterAttacks: [...tempAttacks],cpuAttacks: [...tempCpuAttacks], character: character, cpuCharacter: this.state.characters[randomIndex], gameState: gameStates.PLAYING});
  }

  render() {

    const characterChoice = this.characterChoice;
    const selectCharacter = this.selectCharacter;
    return (

        <div>
            <div className="wrapper p-3" id="Profile">
            <div className="row m-1" >
            <div className="card  col-md-6 p-1" style={{backgroundColor: "black"}}>
                  <div className="userdata">
                  {/* <Userdata /> */}
                  </div>
                  </div>
                  <div className="card  col-md-6 p-1" style={{backgroundColor: "black"}}>
                  <div className="leaderboard">
                      <Leaderboard />
                      {this.state.gameState === gameStates.INITIAL && <button onClick={characterChoice}>Start Battle</button>}
                  </div>
                  </div>
                  <div>
                  <div className="row m-1" >
                  {
                    this.state.gameState === gameStates.CHOOSE_CHARACTER && 
                    <Charcards characters={this.state.characters} selectCharacter={selectCharacter} />
                  }
                  {
                    this.state.gameState === gameStates.PLAYING && 
                    <Battle cpuAttacks={this.state.cpuAttacks} characterAttacks={this.state.characterAttacks} playerCharacter = {this.state.character} cpuCharacter = {this.state.cpuCharacter}/>
                  }
                  </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default Profile;
