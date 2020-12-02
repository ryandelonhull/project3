
import React, { Component } from 'react';
// import './page.css';
import Leaderboard from "../components/Leaderboard/Leaderboard"
import characters from "../characters.json";
import attacks from "../attacks.json";
// import Userdata from '../components/Userdata/Userdata';
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
      cpuAttacks:[],
    }
  }

  // componentDidMount(){
  //  axios.get('./characters.json')
  //  .then((response)=>{
  //    this.setState({characters: response.data});
  //  })
  //  console.log(this.state.characters);
  // }
  componentDidMount(){

  }

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
    // console.log("randomIndex", randomIndex);
    
    const tempCpuAttacks = attacks.filter( (attack)=>{
      return attack.CharacterId === this.state.characters[randomIndex].id
    })

    // console.log("all attacks ", attacks);
    // console.log('tempCpuAttacks', tempCpuAttacks);

    this.setState({characterAttacks: [...tempAttacks],cpuAttacks: [...tempCpuAttacks], character: character, cpuCharacter: this.state.characters[randomIndex], gameState: gameStates.PLAYING});
  }

  render() {

    const characterChoice = this.characterChoice;
    const selectCharacter = this.selectCharacter;
    return (

        <div>
            <div className="wrapper p-3" id="Profile">
               
                <div>
                  <div className="userdata">
                  {/* <Userdata/> */}
                  </div>
                  <div className="leaderboard">
                      <Leaderboard />

                  </div>
                  {this.state.gameState === gameStates.INITIAL && <button onClick={characterChoice}>Start Battle</button>}
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

    );
  }
}

export default Profile;