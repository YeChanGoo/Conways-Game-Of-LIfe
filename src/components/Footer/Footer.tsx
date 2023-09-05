import React from "react";
import "./Footer.css";

interface FooterProps {
  onRandom: () => void;
  computeNextGeneration: () => void;
  start: boolean;
  onStartWithRandomGrid: () => void;
  onClear: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onRandom,
  start,
  onStartWithRandomGrid,
  onClear,
}) => {
  return (
    <div className='footer'>
      <button onClick={() => onRandom()}>Random</button>
      <button onClick={() => onClear()}>Clear Board</button>
      <button onClick={() => onStartWithRandomGrid()}>
        {start ? "Stop" : "Start"}
      </button>
      <button>Increase Speed</button>
      <button>Decrease Speed</button>
    </div>
  );
};

export default Footer;
