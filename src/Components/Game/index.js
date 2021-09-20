import React, { Component } from "react";
import ScoreBoard from "../ScoreBoard/index";
import DisplayScore from "../DisplayScore/index";
import ButtonComponent from "../ButtonComponent/index";
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

  updateState = (monster, player1, list) => {
    this.setState(
      (state) => ({
        monster: monster,
        player1: player1,
        list: [...state.list, ...list],
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
      setImmediate(() => alert("You win this game"));
      this.setState({
        monster: 0,
      });
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
              {this.state.player1 !== 0 &&
              !this.state.game &&
              this.state.monster !== 0 ? (
                <>
                  <ButtonComponent
                    player1={this.state.player1}
                    monster={this.state.monster}
                    updateState={this.updateState}
                    name={"Attack"}
                    num={10}
                    class="attack"
                  />

                  {this.state.player1 > 90 ? (
                    <ButtonComponent
                      player1={this.state.player1}
                      monster={this.state.monster}
                      updateState={this.updateState}
                      name={"Special Attack"}
                      num={20}
                      class="special-attack"
                    />
                  ) : null}
                  <ButtonComponent
                    player1={this.state.player1}
                    monster={this.state.monster}
                    updateState={this.updateState}
                    name="Heal"
                    class="heal"
                  />

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
                    {this.state.list.map((val, index) => (
                      <ScoreBoard
                        message={val.message}
                        active={val.active}
                        key={index}
                      />
                    ))}
                  </ul>
                </div>
              </ScrollableFeed>
            </div>
          </>
        ) : (
          <div className="outer-div">
            <button className="start" onClick={this.startGame}>
              START GAME
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
