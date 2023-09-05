import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface GridOperations {
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
  randomGrid: () => void;
  computeNextGeneration: () => void;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCell: (x: number, y: number) => void;
  startWithRandomGrid: () => void;
  clearGrid: () => void;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
  speed: number;
}
const useGrid = (rows: number, cols: number): GridOperations => {
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

  // State
  const [grid, setGrid] = useState<number[][]>(() => generateGrid());
  const [start, setStart] = useState<boolean>(false);
  const simulationInterval = useRef<NodeJS.Timeout | null>(null);
  const [speed, setSpeed] = useState<number>(1000);

  // Constants
  const positions = useMemo(
    () => [
      [-1, -1], // top-left
      [-1, 0], // top
      [-1, 1], // top-right
      [0, -1], // left
      [0, 1], // right
      [1, -1], // bottom-left
      [1, 0], // bottom
      [1, 1], // bottom-right
    ],
    []
  );

  // Grid functionalities
  const randomGrid = (): void => {
    const newGrid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.random() > 0.5 ? 1 : 0);
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const clearGrid = (): void => {
    setGrid(() => generateGrid());
    setStart(false);
  };

  const startWithRandomGrid = (): void => {
    if (!start) {
      if (isGridEmpty(grid)) {
        randomGrid();
      }
      setStart(true); // Start the simulation
    } else {
      setStart(false); // Stop the simulation
    }
  };

  const isGridEmpty = (currentGrid: number[][]): boolean => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (currentGrid[i][j] === 1) {
          return false; // Return false if any cell is alive
        }
      }
    }
    return true;
  };

  // Toggle cell alive or dead
  const toggleCell = (x: number, y: number): void => {
    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[x][y] = newGrid[x][y] === 1 ? 0 : 1;
      return newGrid;
    });
  };

  // Helper function to count the live neighbors of a cell at position (x, y)
  const countLiveNeighbors = useCallback(
    (grid: number[][], x: number, y: number): number => {
      let count = 0;
      for (const [dx, dy] of positions) {
        const newX = x + dx;
        const newY = y + dy;
        if (
          // Checking for out of bounds
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          grid[newX][newY] === 1
        ) {
          count++;
        }
      }
      return count;
    },
    [rows, cols, positions]
  );

  // Simulation logic
  const computeNextGeneration = useCallback(() => {
    setGrid((currentGrid) => {
      const nextGrid = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          const liveNeighbors = countLiveNeighbors(currentGrid, i, j);
          if (currentGrid[i][j] === 1) {
            if (liveNeighbors < 2 || liveNeighbors > 3) {
              row.push(0);
            } else {
              row.push(1);
            }
          } else {
            if (liveNeighbors === 3) {
              row.push(1);
            } else {
              row.push(0);
            }
          }
        }
        nextGrid.push(row);
      }
      return nextGrid;
    });
  }, [rows, cols, countLiveNeighbors]);

  // Speed logic
  const increaseSpeed = (): void => {
    setSpeed((prevSpeed) => Math.max(100, prevSpeed - 100)); // Decrease interval
  };

  const decreaseSpeed = (): void => {
    setSpeed((prevSpeed) => prevSpeed + 100); // Increase interval
  };

  // UseEffect for simulation control
  useEffect(() => {
    if (start) {
      simulationInterval.current = setInterval(() => {
        computeNextGeneration();
      }, speed);
    } else if (!start && simulationInterval.current) {
      clearInterval(simulationInterval.current);
      simulationInterval.current = null;
    }

    return () => {
      if (simulationInterval.current) {
        clearInterval(simulationInterval.current);
      }
    };
  }, [start, speed, computeNextGeneration]);

  return {
    grid,
    setGrid,
    randomGrid,
    computeNextGeneration,
    start,
    setStart,
    toggleCell,
    startWithRandomGrid,
    clearGrid,
    speed,
    increaseSpeed,
    decreaseSpeed,
  };
};

export default useGrid;
