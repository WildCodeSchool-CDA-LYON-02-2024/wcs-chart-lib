import './App.css';
import Canvas from './components/Canvas';

function App() {
  //Exemple for config chart
  const config = {
    type: 'point',
    radius: 5,
    fillColor: 'black',
    strokeColor: 'black',
    height: 500,
    width: 500,
  };
  return (
    <>
      <Canvas config={config} />
    </>
  );
}

export default App;
