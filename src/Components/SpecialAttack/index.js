import React from "react";
import buttonHOC from "../ButtonHOC/index";

function SpecialAttack(props) {

  return (
    <button onClick={props.attack} className="special-attack">
      Special Attack
    </button>
  );
}
export default buttonHOC(SpecialAttack,20);
