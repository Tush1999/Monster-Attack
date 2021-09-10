import React from "react";

function DisplayScore({ player1, monster }) {
  return (
    <>
      <div className="main-left">
        <div className="left">{player1}</div>
      </div>
      <div className="main-right">
        <div className="right">{monster}</div>
      </div>
    </>
  );
}

export default DisplayScore;
