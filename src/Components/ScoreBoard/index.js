import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return <li className={props.active}>{props.message}</li>;
}
export default ScoreBoard;
