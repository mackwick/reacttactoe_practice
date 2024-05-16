import Square from "./components/Square";
import { useState } from "react";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square name={squares[0]} func={() => handleClick(0)} />
        <Square name={squares[1]} func={() => handleClick(1)} />
        <Square name={squares[2]} func={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square name={squares[3]} func={() => handleClick(3)} />
        <Square name={squares[4]} func={() => handleClick(4)} />
        <Square name={squares[5]} func={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square name={squares[6]} func={() => handleClick(6)} />
        <Square name={squares[7]} func={() => handleClick(7)} />
        <Square name={squares[8]} func={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
