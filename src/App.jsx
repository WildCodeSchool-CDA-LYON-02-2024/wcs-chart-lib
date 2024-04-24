import './App.css';

import Canvas from './components/Canvas';

function App() {
  //Exemple for config chart

  const config = {
    type: 'point',
    toLine: false,
    grid: true,
    radius: 5,
    fillColor: 'red',
    multipleData: true,
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
          [12, 150, 12, 86, 236, 12, 53, 13],
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
