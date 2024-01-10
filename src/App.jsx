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
  console.log(squires);

  const handleClick = (i) => {
    if(squires[i]){
      alert('Already fill up')
      return 
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
    <>
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
    </>
  );
};

export default Board;
