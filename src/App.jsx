import { useState } from "react";

/* eslint-disable react/prop-types */
const Square = ({ value, onSquireClick }) => {
  console.log("sq");

  return (
    <button
      onClick={onSquireClick}
      className="border-2 border-blue-800  w-12 h-12 leading-9 bg-white text-lg m-1"
    >
      {value}
    </button>
  );
};

const Board = () => {
  const [squires, setSquires] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const winner = calculateWinner(squires);
  console.log(winner);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next player : ${x ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    if (squires[i]) {
      alert("Already fill up !!");
      return;
    } else if (winner) {
      alert(`Winner is Selected : ${winner} `);
    }
    const newSquires = [...squires];
    //state change immutably==== = = = ==  == ===============
    if (x) {
      newSquires[i] = "X";
    } else {
      newSquires[i] = "O";
    }

    setSquires(newSquires);
    setX(!x);
  };
  return (
   <div className="flex justify-center items-center h-full">
     <div>
      <div>
        <p className="font-bold text-2xl">{status}</p>
      </div>
      <div className="flex">
        <Square
          value={squires[0]}
          onSquireClick={() => handleClick(0)}
        ></Square>
        <Square
          value={squires[1]}
          onSquireClick={() => handleClick(1)}
        ></Square>
        <Square
          value={squires[2]}
          onSquireClick={() => handleClick(2)}
        ></Square>
      </div>

      <div className="flex">
        <Square
          value={squires[3]}
          onSquireClick={() => handleClick(3)}
        ></Square>
        <Square
          value={squires[4]}
          onSquireClick={() => handleClick(4)}
        ></Square>
        <Square
          value={squires[5]}
          onSquireClick={() => handleClick(5)}
        ></Square>
      </div>

      <div className="flex">
        <Square
          value={squires[6]}
          onSquireClick={() => handleClick(6)}
        ></Square>
        <Square
          value={squires[7]}
          onSquireClick={() => handleClick(7)}
        ></Square>
        <Square
          value={squires[8]}
          onSquireClick={() => handleClick(8)}
        ></Square>
      </div>
    </div>
   </div>
  );
};

export default Board;
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
