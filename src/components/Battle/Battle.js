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
                    winner: !this.selectWinner()
                });
            }
        }, 125);
    };

    attackRound = () => {
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

    render() {

        return (
            <div>
                <h2>Life'll kill ya</h2>
            </div>
        )
    }
}

export default Battle;