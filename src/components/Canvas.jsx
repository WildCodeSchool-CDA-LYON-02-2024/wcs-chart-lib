import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CanvasConfig from '../services/Canvas';
import Legend from '../services/Legend';
import selectChart from '../services/charts/selectChart';
import initAxies from '../services/initAxies';

const Canvas = ({ config, legend, dataset }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const legendService = new Legend();

    const handleResize = () => {
      const canvasCfg = new CanvasConfig(
        canvasRef,
        config.height,
        config.width
      );

      const drawContent = () => {
        if (legend) {
          legendService.drawLegend(
            canvasCfg.context,
            legend,
            canvasCfg.canvas,
            canvasCfg.spacing
          );
        }
      };

      drawContent();
      // initAxies(canvasCfg, config);
      selectChart(config, canvasCfg, dataset);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [config, legend]);

  return <canvas ref={canvasRef} />;
};

Canvas.propTypes = {
  dataset: PropTypes.object,
  config: PropTypes.object.isRequired,
  legend: PropTypes.oneOf(['inline', 'blockLeft', 'blockRight', 'none']),
};

export default Canvas;
