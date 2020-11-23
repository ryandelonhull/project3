import React, { Component } from "react";
import "./Battle.css";
//set variables for attack
const attack = ["x", "y", "z", "a", "b"];
//are attacks going to be randomly set === variable with attack name associated with character?
//how are building attack buttons?

class Battle extends Component {
    state = {
        user: attack[{}],
        CPU: attack[{}],
        userHealth: 7,
        cpuHealth: 7,
        winner: ""
    };

    selectWinner(){
        console.log("Winner Winner Chicken Dinner!")
        //takes in game data
        //takes in characterstatus and determines if winner exists?
    }

    startBattle = () => {
        event.preventDefault();
        let userHealth = 7;
        let cpuHealth = 7;
        //what is gameInterval?
        let gameInterval = setInterval(() => {
            //counter is not defined -error gotten when button clicked -what is the counter? why is not defined?
            // counter--;
            this.setState({
                CPU: attack[Math.floor(Math.random() * attack.length)],
                
            });
            //if either user or computer lost, clearInterval(gameInterval) --what does that mean
            //then set state winner --
            if (userHealth || cpuHealth === 0) {
                clearInterval(gameInterval);
                this.setState({
                    winner: !this.selectWinner()
                });
            }
            //what is 125?
        }, 125);
    };

    attackRound = () => {
        //how are we using cpu/user in this context? 
        //how can user be equal to cpu is that user and cpu health???
        //if user is referring to user attack, it should be called userAttack and cpuAttack 
        const { user, CPU } = this.state;

        if (user === CPU) {
            
            return "This round is a draw partner";
        } else if (
            (user === "x" && CPU === "y") ||
            (user === "y" && CPU === "z") ||
            (user === "z" && CPU === "a") ||
            (user === "a" && CPU === "b") ||
            (user === "b" && CPU === "x")
        ) {
            return "YOU DEALT A MIGHTY BLOW!"
            (cpuHealth - 1);
        } else if (
            (user === "x" && CPU === "z") ||
            (user === "y" && CPU === "a") ||
            (user === "z" && CPU === "b") ||
            (user === "a" && CPU === "x") ||
            (user === "b" && CPU === "y")
        ) {
            return (cpuHealth - 2);
        } else if (
            (user === "x" && CPU === "a") ||
            (user === "y" && CPU === "b") ||
            (user === "z" && CPU === "x") ||
            (user === "a" && CPU === "y") ||
            (user === "b" && CPU === "z")
        ) {
            return (userHealth - 1);
        } else if (
            (user === "x" && CPU === "b") ||
            (user === "y" && CPU === "x") ||
            (user === "z" && CPU === "y") ||
            (user === "a" && CPU === "z") ||
            (user === "b" && CPU === "a")
        ) {
            return (userHealth - 2);
        }

    }

//need a function to link attack variables to buttons
//need a function to display users named attacks as buttons link those bad boys up
//need to write battle results into the database as they happen
//reminder when game is over we need to clear game data/ and character status data (on the databases)


    render() {

        return (
            <div>
                <h2>Life'll kill ya</h2>
                <button onClick={event => this.startBattle(event)}>Start Battle</button>
            </div>
        )
    }
}

export default Battle;