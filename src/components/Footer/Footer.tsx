import React from "react";
import "./Footer.css";

interface FooterProps {
  onRandom: () => void;
  computeNextGeneration: () => void;
  start: boolean;
  onStartWithRandomGrid: () => void;
  onClear: () => void;
  speed: number;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onRandom,
  start,
  onStartWithRandomGrid,
  onClear,
  speed,
  increaseSpeed,
  decreaseSpeed,
}) => {
  // Updates per second based on speed
  const updatesPerSecond: number = 1000 / speed;
  // Determine if the speed is considered high for a fire emoji
  const isSpeedHigh: boolean = updatesPerSecond >= 2.5;

  return (
    <div className='footer' data-testid='footer-component'>
      <button onClick={() => onRandom()}>Random</button>
      <button onClick={() => onClear()}>Clear Board</button>
      <button onClick={() => onStartWithRandomGrid()}>
        {start ? "Stop" : "Start"}
      </button>
      <button onClick={increaseSpeed}>Increase Speed</button>
      <button onClick={decreaseSpeed}>Decrease Speed</button>
      <span className={`speed-text ${isSpeedHigh ? "high-speed" : ""}`}>
        {" "}
        Speed: {updatesPerSecond.toFixed(2)} updates per second
        {isSpeedHigh && " 🔥"}
      </span>
    </div>
  );
};

export default Footer;
