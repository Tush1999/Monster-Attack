import React from "react";
import buttonHOC from "../ButtonHOC/index";

function Heal(props) {

  return (
    <button className="heal" onClick={props.heal}>
      Heal
    </button>
  );
}
export default buttonHOC(Heal)
