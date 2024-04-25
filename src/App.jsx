import './App.css';

import Canvas from './components/Canvas';
import TestCanvas from './components/TestCanvas';

function App() {
  //Exemple for config chart

  const config = {
    type: 'bar',
    toLine: true,
    grid: true,
    radius: 10,
    fillColor: 'black',
    // strokeColor: 'red',
    // // height: 500,
    // width: 500,
  };

  const dataset = [
    {
      tag: 'Titre',
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
        values: [
          [10, 20, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
          [30, 20, 15, 102, 136, 120, 321],
        ],
      },
    },
  ];

  return (
    <>
      <Canvas config={config} dataset={dataset} />
      <TestCanvas config={config} dataset={dataset} />
    </>
  );
}

export default App;
