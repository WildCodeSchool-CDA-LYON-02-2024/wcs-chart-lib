import './App.css';
import Canvas from './components/Canvas';

function App() {
  //Exemple for config chart
  const config = {
    type: 'point',
    toLine: true,
    grid: true,
    radius: 5,
    fillColor: 'red',
    // strokeColor: 'red',
    // // height: 500,
    // width: 500,
  };

  return (
    <>
      <Canvas config={config} />
    </>
  );
}

export default App;
