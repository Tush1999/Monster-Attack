import React, { Component } from "react";
import ScoreBoard from "../ScoreBoard/index";
import DisplayScore from "../DisplayScore/index";
import AttackButton from "../AttackButton/index";
import SpecialAttack from "../SpecialAttack/index";
import Heal from "../Heal/index";
import "./style.css";
import ScrollableFeed from "react-scrollable-feed";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 100,
      monster: 100,
      game: false,
      list: [],
      start: false,
    };
    this.initialState = this.state;
  }

  updateState = (num1, num2) => {
    this.setState(
      (state) => ({
        monster: state.monster - num1,
        player1: state.player1 - num2,
        list: [
          ...state.list,
          { message: `You hit monster by ${num1}`, active: "win" },
          { message: `Moster hit you by ${num2}`, active: "loss" },
        ],
      }),
      this.handleAlert
    );
  };
  handleAlert = () => {
    if (this.state.player1 <= 0 && !this.state.game) {
      setImmediate(() => alert("Awwww....You lose this game. Play again"));
      this.setState({
        player1: 0,
        list: [
          ...this.state.list,
          { message: "Game over", active: "game-over" },
        ],
      });
    } else if (this.state.monster <= 0) {
      alert("You win this game");
    }
  };

  handleAttack = (num1, num2) => {
    this.updateState(num1, num2);
  };

  handleSpecialAttack = (num1, num2) => {
    this.updateState(num1, num2);
  };
  handleHeal = (num2,message) => {
    console.log(message)
    if (this.state.player1 < 90) {
      this.setState(
        (state) => ({
          player1: this.state.player1 + 10 - num2,
          list: [
            ...state.list,
           ...message
          ],
        }),
        this.handleAlert
      );
    }
  };
  handleGive = () => {
    this.setState({
      list: [...this.state.list, { message: "You give up" }],
      game: true,
    });
  };
  PlayAgain = () => {
    this.setState(this.initialState);
  };
  startGame = () => {
    this.setState({ start: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.start ? (
          <>
            <div className="heading">
              <h1>YOU</h1>
              <h1>MONSTER</h1>
            </div>
            <div className="display">
              <DisplayScore
                player1={this.state.player1}
                monster={this.state.monster}
              />
            </div>
            <div className="button-div">
              {this.state.player1 !== 0 && !this.state.game ? (
                <>
                  <AttackButton attack={this.handleAttack} />

                  {this.state.player1 > 90 ? (
                    <SpecialAttack attack={this.handleSpecialAttack} />
                  ) : null}
                  <Heal heal={this.handleHeal}/>
                  
                  <button className="give-up" onClick={this.handleGive}>
                    Give up
                  </button>
                </>
              ) : (
                <button className="restart" onClick={this.PlayAgain}>
                  Play Again
                </button>
              )}
            </div>
            <div className="extra" />

            <div className="result-box">
              <ScrollableFeed forceScroll={true}>
                <div className="inner-div">
                  <ul className="text">
                    {this.state.list.map((val) => (
                      <ScoreBoard message={val.message} active={val.active} />
                    ))}
                  </ul>
                </div>
              </ScrollableFeed>
            </div>
          </>
        ) : (
          <button className="start" onClick={this.startGame}>
            START GAME
          </button>
        )}
      </React.Fragment>
    );
  }
}
