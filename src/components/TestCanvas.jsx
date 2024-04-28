<<<<<<< HEAD
import WCS from './WCS';
import PropTypes from 'prop-types';

function TestCanvas({ config, dataset }) {
=======
import Canvas from './Canvas';
import PropTypes from 'prop-types';

function TestCanvas({ config, dataset, theme }) {
>>>>>>> theme-peer-progr
  return (
    <div>
      <h2>Canvas avec légende en haut :</h2>
      <WCS
        config={config}
        dataset={dataset}
        legend='onTop'
<<<<<<< HEAD
=======
        theme={theme}
>>>>>>> theme-peer-progr
        style={{ border: '1px solid black', marginBottom: '20px' }}
      />
      <h2>Canvas avec légende en ligne :</h2>
      <WCS
        config={config}
        dataset={dataset}
        legend='inline'
<<<<<<< HEAD
=======
        theme={theme}
>>>>>>> theme-peer-progr
        style={{ border: '1px solid black', marginBottom: '20px' }}
      />

      <h2>Canvas avec légende à gauche :</h2>
      <WCS
        config={config}
        dataset={dataset}
        legend='blockLeft'
<<<<<<< HEAD
=======
        theme={theme}
>>>>>>> theme-peer-progr
        style={{ border: '1px solid black', marginBottom: '20px' }}
      />

      <h2>Canvas avec légende à droite :</h2>
      <WCS
        dataset={dataset}
        config={config}
        legend='blockRight'
<<<<<<< HEAD
=======
        theme={theme}
>>>>>>> theme-peer-progr
        style={{ border: '1px solid black', marginBottom: '20px' }}
      />

      <h2>Canvas sans légende :</h2>
      <WCS
        config={config}
        dataset={dataset}
        legend='none'
<<<<<<< HEAD
=======
        theme={theme}
>>>>>>> theme-peer-progr
        style={{ border: '1px solid black', marginBottom: '20px' }}
      />
    </div>
  );
}

TestCanvas.propTypes = {
  config: PropTypes.object.isRequired,
  dataset: PropTypes.object,
};

export default TestCanvas;
