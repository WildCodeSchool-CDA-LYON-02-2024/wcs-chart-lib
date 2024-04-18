import './App.css';
import TestCanvas from './components/TestCanvas';
import Canvas from './components/Canvas';

function App() {
  //Exemple for config chart
  const config = {
    type: 'bar',
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
        labels: [
          'Janvier',
          'Fevrier',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Aout',
          'Septemnre',
          'Octobre',
          'Novembre',
          'Decembre',
        ],
        values: [10, 20, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
      },
    },
  ];

  return (
    <>
      <TestCanvas config={config} dataset={dataset} />
      <Canvas config={config} dataset={dataset} />
    </>
  );
}

export default App;
