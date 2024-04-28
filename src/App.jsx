import './App.css';

import WCS from './components/WCS';

function App() {
  //Exemple for config chart

  const config = {
    type: 'line',
    // height: 500,
    // width: 1000,
    radius: 10,
    grid: true,
    barWidth: 10,
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
          'Septembre',
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
