import { useState } from "react";

/* eslint-disable react/prop-types */
const Square = () => {
  const [value, setValue] = useState(null);
  const handleCLick = () => {
    setValue('X')
    console.log("clicked");
  };
  return (
    <button
      onClick={handleCLick}
      className="border-2 border-blue-800  w-12 h-12 leading-9 bg-white text-lg m-1"
    >
      {value}
    </button>
  );
};

const Board = () => {
  console.log('board')
  return (
    <>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>

      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>

      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
};

export default Board;
