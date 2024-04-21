import './App.css';

import Canvas from './components/Canvas';

function App() {
  //Exemple for config chart

  const config = {
    type: 'point',
    toLine: true,
    grid: true,
    radius: 5,
    fillColor: 'blue',
    strokeColor: 'blue',
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
        values: [10, 20, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56],
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
