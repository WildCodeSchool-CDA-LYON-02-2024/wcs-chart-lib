import './App.css';

import Canvas from './components/Canvas';
import TestCanvas from './components/TestCanvas';

function App() {
  //Exemple for config chart

  const config = {
    type: 'point',
    toLine: true,
    grid: true,
    radius: 10,
    // fillColor: 'red',
    // strokeColor: 'red',
    // // height: 500,
    // width: 500,
  };

  // const theme = {
  //   backgroundColor: 'red',
  //   fillColor: 'white',
  //   strokeColor: 'red',
  // };

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
        values: [88, 100, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
      },
    },
  ];

  return (
    <>
      <Canvas config={config} dataset={dataset} theme={'nature'} />
      <TestCanvas config={config} dataset={dataset} theme={'aqua'} />
    </>
  );
}

export default App;
