import React from "react";
import buttonHOC from '../ButtonHOC/index'
import './style.css'

function AttackButton(props) {
  return (
    <button className="attack" onClick={props.attack}>
      Attack
    </button>
  );
}

export default buttonHOC(AttackButton,10);
