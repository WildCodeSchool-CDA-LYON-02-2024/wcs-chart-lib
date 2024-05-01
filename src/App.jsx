import './App.css';

import WCS from './components/WCS';

function App() {
  //Exemple for config chart
  console.log('innerWidh : ', innerWidth);

  const config = {
    type: 'point',
    height: 50,
    width: 100,
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

  const theme = {
    adaptFontSizeY: 5,
    adaptFontSizeX: 0,
    adaptFontSizeLabels: 0,
  };

  return (
    <div className='app'>
      <WCS config={config} dataset={dataset} theme={theme} />
    </div>
  );
}

export default App;
