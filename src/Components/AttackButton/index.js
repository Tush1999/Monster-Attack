import React from "react";

function AttackButton(props) {
  let handleAttack = () => {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;
    props.attack(num1, num2);
  };

  return (
    <button onClick={handleAttack} className="attack">
      Attack
    </button>
  );
}

export default AttackButton;
