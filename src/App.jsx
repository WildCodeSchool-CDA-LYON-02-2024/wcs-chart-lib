import './App.css';

import WCS from './components/WCS';
import TestCanvas from './components/TestCanvas';

function App() {
  //Exemple for config chart

  const config = {
    type: 'pie',
    toLine: true,
    grid: true,
    radius: 100,
    fillColor: 'blue',
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
        values: [[10, 20, 30, 40, 50, 60, 51, 11, 51, 23, 47, 56]],
      },
    },
  ];

  return (
    <>
      <WCS config={config} dataset={dataset} legend='onTop' />
    </>
  );
}

export default App;
