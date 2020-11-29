import React, { Component } from "react";
import "./Battle.css";
//set variables for attack
//are attacks going to be randomly set === variable with attack name associated with character?
//how are building attack buttons?
const attack = ["x", "y", "z", "a", "b"];


class Battle extends Component {
    state = {
        userAttack: "",
        cpuAttack: "",

        userHealth: 7,
        cpuHealth: 7,
        winner: "",
        inPlay: false,
        message: ""
    };

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
        <div>
            <button onClick={ () => this.attack("x", 0)}>X HOOK</button>
            <button onClick={ () => this.attack("y", 1)}>Y HOOK</button>
            <button onClick={ () => this.attack("z", 2)}>Z HOOK</button>
            <button onClick={ () => this.attack("a", 3)}>A HOOK</button>
            <button onClick={ () => this.attack("b", 4)}>B HOOK</button>
        </div>);
    }

   checkWinner = () =>{
       const {cpuHealth, userHealth} = this.state;
    if (cpuHealth <= 0 && userHealth > 0){
        this.setState({winner: "Player", message: "Player wins"});
    }
    else if(userHealth <= 0 && cpuHealth > 0){
        this.setState({winner:  "cpu", message: "Computer wins"});
    }

   }

    attackRound = () => {
        //how are we using cpuAttack/userAttack in this context? 
        //how can userAttack be equal to cpuAttack is that userAttack and cpuAttack health???
        //if userAttack is referring to userAttack attack, it should be called userAttackAttack and cpuAttackAttack 
        const { userAttack, cpuAttack, userHealth, cpuHealth } = this.state;
        const { checkWinner } = this;

        if (userAttack === cpuAttack) {
            
            return "This round is a draw partner";
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

//need a function to link attack variables to buttons
//need a function to display userAttacks named attacks as buttons link those bad boys up
//need to write battle results into the database as they happen
//reminder when game is over we need to clear game data/ and character status data (on the databases)


    render() {

        // const { inPlay } = this.state;
        // const  { attackButtons } = this.attackButtons;

        return (
            <div>
                <h2>Life'll kill ya</h2>
                <button onClick={this.startBattle}>Start Battle</button>
                {this.state.inPlay? (attackButtons()): ""};
                
            </div>
        )
    }
}

export default Battle;