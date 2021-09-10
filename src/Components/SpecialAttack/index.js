import React from "react";

function SpecialAttack(props) {
  let handleSpecialAttack = () => {
    let num1 = Math.floor(Math.random() * 11) + 10;
    let num2 = Math.floor(Math.random() * 20) + 1;
    this.props.attack(num1, num2);
  };

  return (
    <button onClick={handleSpecialAttack} className="special-attack">
      Special Attack
    </button>
  );
}
export default SpecialAttack;
