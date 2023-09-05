import { useState } from "react";
import "./Grid.css";

const Grid: React.FC = () => {
  // initalize rows and cols to 50
  const rows: number = 50;
  const cols: number = 50;

  // Generate Grid
  const generateGrid = (): number[][] => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      // initalize with 0s
      const row = Array(cols).fill(0);
      grid.push(row);
    }
    return grid;
  };

  // Toggle cell alive or dead
  const toggleCell = (x: number, y: number): void => {
    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[x][y] = newGrid[x][y] === 1 ? 0 : 1;
      return newGrid;
    });
  };

  // State
  const [grid, setGrid] = useState<number[][]>(() => generateGrid());

  return (
    <div className='grid'>
      {grid.map((row, i) => (
        <div className='row' key={i}>
          {row.map((cell, j) => (
            <div
              className={`cell ${cell ? "alive" : "dead"}`}
              key={j}
              onClick={() => {
                toggleCell(i, j);
              }}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
