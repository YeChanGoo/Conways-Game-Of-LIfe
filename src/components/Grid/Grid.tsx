import "./Grid.css";

interface GridProps {
  grid: number[][];
  toggleCell: (x: number, y: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, toggleCell }) => {
  return (
    <div className='grid' data-testid='grid-component'>
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
