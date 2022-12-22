import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square value={squares[0]} handleClick={handleClick} index={0} />
          <Square value={squares[1]} handleClick={handleClick} index={1} />
          <Square value={squares[2]} handleClick={handleClick} index={2} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} handleClick={handleClick} index={3} />
          <Square value={squares[4]} handleClick={handleClick} index={4} />
          <Square value={squares[5]} handleClick={handleClick} index={5} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} handleClick={handleClick} index={6} />
          <Square value={squares[7]} handleClick={handleClick} index={7} />
          <Square value={squares[8]} handleClick={handleClick} index={8} />
        </div>
      </div>
    </div>
  );
}
