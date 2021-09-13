import React, { Component } from "react";

const buttonHOC = (Wcomponent, num) => {
  class Button extends Component {
    constructor(props) {
      super(props);
      this.state = { player1: "", monster: "", list: [] };
      this.initialState = this.state;
    }
    handleAttack = () => {
         var num2 = Math.floor(Math.random() * 20) + 1;
        var player1 = this.props.player1 - num2;
        var num1 = Math.floor(Math.random() * num) + 1;
        var monster = this.props.monster - num1;
        var list = [
          { message: `You hit monster by ${num1}`, active: "win" },
          { message: `Moster hit you by ${num2}`, active: "loss" },
        ];
        this.props.updateState(monster, player1, list);
      } 
      
      handleHeal=()=>{
        if(this.props.player1<90){
         var num2 = Math.floor(Math.random() * 20) + 1;
         var player1 = this.props.player1- num2+10;
         var monster = this.props.monster;
        var list = [
          { message: `You heal yourself by 10`, active: "win" },
          { message: `Monster hit you by ${num2}`, active: "loss" },
        ];
      this.props.updateState(monster, player1, list);
    }
    }


    render() {
      return <Wcomponent attack={this.handleAttack} heal={this.handleHeal}/>;
    }
  }
  return Button;
};
export default buttonHOC;
