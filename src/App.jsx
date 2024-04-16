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

  const dataset = [
    {
      tag: 'test',
      data: {
        labels: ['poires', 'pommes', 'banane'],
        values: [
          150, 8500, 100, 100, 200, 100, 100, 100, 200, 150, 100, 100, 100,
        ],
      },
    },
  ];

  return (
    <>
      <Canvas config={config} dataset={dataset} />
    </>
  );
}

export default App;
