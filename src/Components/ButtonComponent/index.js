import React from "react";

function ButtonComponent(props) {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default ButtonComponent;
