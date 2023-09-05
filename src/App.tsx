import "./App.css";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Grid />
      <Footer />
    </div>
  );
};

export default App;
