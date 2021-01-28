import React from "react";

const Instruction = () => {
  return (
    <div className="left instruccions">
      <aside className="title">Instruction</aside>
      <p className="subtitle">How to Play?</p>
      <p className="subtitle-2">Move:</p>
      <ul className="move">
        <li> ← h </li>
        <li> ↓ j</li>
        <li> ↑ k</li>
        <li> → l</li>
      </ul>
      <ul className="mode">
        <li>INSERT mode i</li>
        <li>NORMAL mode esc</li>
      </ul>
    </div>
  );
};

export default Instruction;
