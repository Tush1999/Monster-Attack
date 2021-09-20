import React from "react";

function ButtonComponent(props) {
  var handleAttack = () => {
    if (props.num) {
      var num2 = Math.floor(Math.random() * 20) + 1;
      var player1 = props.player1 - num2;
      var num1 = Math.floor(Math.random() * props.num) + 1;
      var monster = props.monster - num1;
      var list = [
        { message: `You hit monster by ${num1}`, active: "win" },
        { message: `Moster hit you by ${num2}`, active: "loss" },
      ];
      props.updateState(monster, player1, list);
    } else handleHeal();
  };

  function handleHeal() {
    if (props.player1 < 90) {
      var num2 = Math.floor(Math.random() * 20) + 1;
      var player1 = props.player1 - num2 + 10;
      var monster = props.monster;
      var list = [
        { message: `You heal yourself by 10`, active: "win" },
        { message: `Monster hit you by ${num2}`, active: "loss" },
      ];
      props.updateState(monster, player1, list);
    }
  }
  return (
    <button className={props.class} onClick={handleAttack}>
      {props.name}
    </button>
  );
}

export default ButtonComponent;
