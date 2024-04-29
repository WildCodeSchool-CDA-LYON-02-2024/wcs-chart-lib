import './App.css';

import WCS from './components/WCS';

function App() {
  //Exemple for config chart

  const config = {
    type: 'pie',
    // height: 500,
    // width: 1000,
    radius: 100,
    // grid: true,
    // barWidth: 30,
    // toLine: true,
  };

  const theme = {
    // backgroundColor: 'red',
    // fillColor: 'white',
    // strokeColor: 'red',
  };

  const dataset = [
    {
      tag: ['Titre1'],
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
      <WCS config={config} dataset={dataset} legend='top' theme={theme} />
    </>
  );
}

export default App;
