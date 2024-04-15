import './App.css';
import Canvas from './components/Canvas';

function App() {
  //Exemple for config chart
  const config = {
    type: 'line',
    radius: 5,
    fillColor: 'blue',
    strokeColor: 'red',
    // height: 800,
    // width: 400,
  };

  return (
    <>
      <Canvas config={config} />
    </>
  );
}

export default App;
