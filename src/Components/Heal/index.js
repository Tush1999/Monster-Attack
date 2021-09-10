import React from "react";

function Heal(props) {
  let handleHeal = () => {
    let num2 = Math.floor(Math.random() * 20) + 1;
    let list = [
      { message: `You heal yourself by 10`, active: "win" },
      { message: `Monster hit you by ${num2}`, active: "loss" },
    ];
    props.heal(num2, list);
  };
  return (
    <button className="heal" onClick={handleHeal}>
      Heal
    </button>
  );
}
export default Heal
