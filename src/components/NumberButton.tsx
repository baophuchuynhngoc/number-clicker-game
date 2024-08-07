import React from 'react';

interface NumberButtonProps {
  num: number;
  position: React.CSSProperties;
  handleClick: (num: number) => void;
  isClicked: boolean;
}

const NumberButton: React.FC<NumberButtonProps> = ({ num, position, handleClick, isClicked }) => {
  return (
    <button 
      onClick={() => handleClick(num)}
      disabled={isClicked}
      style={position}
      className={`absolute p-4 w-16 h-16 flex items-center justify-center rounded-full border border-solid  transition-opacity duration-300 ${
        isClicked ? 'opacity-0' : ' text-black'
      }`}
    >
      {num}
    </button>
  );
};

export default NumberButton;
