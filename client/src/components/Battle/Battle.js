import React, { Component } from "react";
import "./Battle.css";
import Axios from "axios";
import API from '../../utils/API';
import winnerImage from "../winner.png";
import gameOver from "../gameover.png";

//set variables for attack
//are attacks going to be randomly set === variable with attack name associated with character?
//how are building attack buttons?
const attack = ["x", "y", "z", "a", "b"];


class Battle extends Component {


    constructor(props){
        super(props);

        this.state = {
            userAttack: "",
            cpuAttack: "",
    
            userHealth: 7,
            cpuHealth: 7,
            winner: "",
            inPlay: true,
            message: "",
            playerCharacter: props.playerCharacter,
            cpuCharacter: props.cpuCharacter,
            cpuAttacks: props.cpuAttacks,
            characterAttacks: props.characterAttacks
        };

    }


    startBattle = () =>{
        this.setState({userAttack: "", cpuAttack: "",inPlay: true, userHealth: 7, cpuHealth: 7} );
    }

    attack = (event, attackIndex) =>{
        this.setState({userAttack: attack[attackIndex], cpuAttack: attack[Math.floor(Math.random() * attack.length)]},
            
            this.attackRound
        );
   }

    attackButtons = () =>{
        return (
        <div className="buttons">

            <button className="button" onClick={ () => this.attack("x", 0)}>{this.state.characterAttacks[0].name}</button>
            <button className="button" onClick={ () => this.attack("y", 1)}>{this.state.characterAttacks[1].name}</button>
            <button className="button" onClick={ () => this.attack("z", 2)}>{this.state.characterAttacks[2].name}</button>
            <button className="button" onClick={ () => this.attack("a", 3)}>{this.state.characterAttacks[3].name}</button>
            <button className="button" onClick={ () => this.attack("b", 4)}>{this.state.characterAttacks[4].name}</button>
        </div>);
    }

    


   checkWinner = () =>{
       const {cpuHealth, userHealth, playerCharacter, cpuCharacter} = this.state;
    if (cpuHealth <= 0 && userHealth > 0){
        this.setState({winner: "Player", message: `${playerCharacter.name} wins`}, (<div><img src={winnerImage} alt="winner" id="winner"></img></div>));
        //API.saveWinner({user: })
        
    }
    else if(userHealth <= 0 && cpuHealth > 0){
        this.setState({winner:  "cpu", message: `${cpuCharacter.name} wins`}, (<div><img src={gameOver} alt="gameOver" id="gameOver"></img></div>));
        //API.saveWinner({user: })
        
    }

   }

    attackRound = () => {
        //how are we using cpuAttack/userAttack in this context? 
        //how can userAttack be equal to cpuAttack is that userAttack and cpuAttack health???

        //if userAttack is referring to userAttack attack, it should be called userAttack and cpuAttack 

        const { userAttack, cpuAttack, userHealth, cpuHealth } = this.state;
        const { checkWinner } = this;

        if (userAttack === cpuAttack) {  
            this.setState( {message: "This round is a draw partner"});
        } else if (
            (userAttack === "x" && cpuAttack === "y") ||
            (userAttack === "y" && cpuAttack === "z") ||
            (userAttack === "z" && cpuAttack === "a") ||
            (userAttack === "a" && cpuAttack === "b") ||
            (userAttack === "b" && cpuAttack === "x")
        ) {
            this.setState( {cpuHealth: cpuHealth-1, message: "YOU DEALT A MIGHTY BLOW! MINUS ONE TO YOUR OPPONENT!"}, checkWinner);
        } else if (
            (userAttack === "x" && cpuAttack === "z") ||
            (userAttack === "y" && cpuAttack === "a") ||
            (userAttack === "z" && cpuAttack === "b") ||
            (userAttack === "a" && cpuAttack === "x") ||
            (userAttack === "b" && cpuAttack === "y")
        ) {

            this.setState( { cpuHealth: cpuHealth-2, message: "A LEGENDARY STRIKE! MINUS TWO TO YOUR OPPONENT!"}, checkWinner);

        } else if (
            (userAttack === "x" && cpuAttack === "a") ||
            (userAttack === "y" && cpuAttack === "b") ||
            (userAttack === "z" && cpuAttack === "x") ||
            (userAttack === "a" && cpuAttack === "y") ||
            (userAttack === "b" && cpuAttack === "z")
        ) {

            this.setState({userHealth: userHealth-1, message: "YOUR ATTACK HAS BEEN FOILED! MINUS ONE TO YOU!"}, checkWinner);

        } else if (
            (userAttack === "x" && cpuAttack === "b") ||
            (userAttack === "y" && cpuAttack === "x") ||
            (userAttack === "z" && cpuAttack === "y") ||
            (userAttack === "a" && cpuAttack === "z") ||
            (userAttack === "b" && cpuAttack === "a")
        ) {

            this.setState({userHealth: userHealth-2, message: "A STUNNING WALLOP BY YOUR OPPONENT! MINUS TWO TO YOU!"}, checkWinner);

        }

    }



    render() {

        // const { inPlay } = this.state;
        // const  { attackButtons } = this.attackButtons;
        const {cpuCharacter, playerCharacter, userHealth, cpuHealth, cpuAttacks, message} = this.state;

        return (
            <div>
                <div>
                    {message}
                </div>
                <div className="user-corner">
                    <div>
                        <img className="user-img" src={playerCharacter.image} alt="user character"></img>
                    </div>
                    <div>
                        <h5>{playerCharacter.name} Health: {userHealth}</h5>
                    </div>
                </div>
                <div className="cpu-corner">
                    <div>
                        <img className="cpu-img" src={cpuCharacter.image} alt="computer character"></img>
                    </div>
                    <div>
                        <h5>{cpuCharacter.name} Health: {cpuHealth}</h5>
                        <h4>{this.state.cpuAttack.name}</h4>
                    </div> 
                </div>
                <div>
                    {this.state.inPlay? (this.attackButtons()): ""}
                </div>
            </div>
        )
    }
}

export default Battle;