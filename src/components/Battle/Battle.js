import React, { Component } from "react";
import "./Battle.css";

const attack = ["x", "y", "z", "a", "b"];
class Battle extends Component {
    state = {
        user: attack[{}],
        CPU: attack[{}],
        userHealth: 7,
        cpuHealth: 7,
        winner: ""
    };

    startBattle = () => {
        // let userHealth = 7;
        // let cpuHealth = 7;
        let gameInterval = setInterval(() => {
            counter--;
            this.setState({
                CPU: attack[Math.floor(Math.random() * attack.length)],
                
            });
            if (userHealth || cpuHealth === 0) {
                clearInterval(gameInterval);
                this.setState({
                    winner: this.selectWinner()
                });
            }
        }, 125);
    };

    selectWinner = () => {
        const { user, CPU } = this.state;

    }

    render
}

export default Battle;