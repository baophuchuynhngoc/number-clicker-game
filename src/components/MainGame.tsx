import React, { useState } from "react";
import Timer from "./Timer";
import NumberButton from "./NumberButton";
import { getRandomPosition, shuffleArray } from "../utils";

const MainGame: React.FC = () => {
  const [title, setTitle] = useState<string>("Let's Play");
  const [number, setNumber] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [positions, setPositions] = useState<React.CSSProperties[]>([]);
  const [start, setStart] = useState<boolean>(false);
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(Number(e.target.value));
  const startGame = () => {
    const generatedNumbers = shuffleArray(Array.from({ length: number }, (_, i) => i + 1));
    setNumbers(generatedNumbers);
    setPositions(generatedNumbers.map(() => getRandomPosition()));
    setClickedNumbers([]);
    setTitle("Let's Play");
    setStart(false); 
    setTimeout(() => {
      setStart(true); 
    }, 0);
  };
  

  const handleClick = (num: number) => {
    if (num === clickedNumbers.length + 1) {
      setClickedNumbers([...clickedNumbers, num]);
      if (clickedNumbers.length + 1 === numbers.length) {
        setTitle('ALL CLEAR');
        setStart(false); 
      }
    } else {
      alert('Please select the numbers in order!');
    }
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-5">{title}</h1>
      <div>
        Points:
        <input
          type="text"
          value={number}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded mb-5"
          placeholder="Enter number of elements"
        />
      </div>
      <div className="mb-5">
        <Timer startTime={start} />
      </div>
      <button
        onClick={startGame}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-5"
      >
        Start Game
      </button>
      <div className="relative w-[400px] h-[400px] border border-gray-500 overflow-hidden">
        {numbers.map((num, index) => (
          <NumberButton
            key={num}
            num={num}
            position={positions[index]}
            handleClick={handleClick}
            isClicked={clickedNumbers.includes(num)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainGame;
