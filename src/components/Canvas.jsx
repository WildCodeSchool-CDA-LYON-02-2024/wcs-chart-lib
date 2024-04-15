import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import CanvasConfig from '../services/Canvas';
import selectChart from '../services/charts/selectChart';
import initCanvas from '../services/initCanvas';

const Canvas = ({ config }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // create a new Class for setup the canvas
    const canvasCfg = new CanvasConfig(canvasRef, config.height, config.width);
    // init the canvas using configuration of the class and props
    initCanvas(canvasCfg, config);
    // select the chart for the canvas
    selectChart(config, canvasCfg);
  }, [config]);

  return <canvas ref={canvasRef} />;
};

Canvas.propTypes = {
  config: PropTypes.object,
};

export default Canvas;
