import "./App.css";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import useGrid, { GridOperations } from "./hooks/useGrid";

const App = () => {
  const {
    grid,
    randomGrid,
    computeNextGeneration,
    start,
    toggleCell,
    startWithRandomGrid,
    clearGrid,
  } = useGrid(50, 50) as GridOperations;

  return (
    <div className='app-container'>
      <Header />
      <Grid grid={grid} toggleCell={toggleCell} />
      <Footer
        onRandom={randomGrid}
        computeNextGeneration={computeNextGeneration}
        start={start}
        onStartWithRandomGrid={startWithRandomGrid}
        onClear={clearGrid}
      />
    </div>
  );
};

export default App;
