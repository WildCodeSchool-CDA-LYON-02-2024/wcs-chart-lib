import './App.css';

import WCS from './components/WCS';

function App() {
  //Exemple for config chart

  const config = {
    type: 'line',
    height: 100,
    width: 100,
  };

  const dataset = [
    {
      tag: [],
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
    <div className='app'>
      <WCS config={config} dataset={dataset} theme={'top'} />
    </div>
  );
}

export default App;
