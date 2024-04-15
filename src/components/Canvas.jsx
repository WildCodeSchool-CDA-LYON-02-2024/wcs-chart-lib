import { useEffect, useRef } from 'react';

import CanvasConfig from '../services/Canvas';
import selectChart from '../services/charts/selectChart';
import initCanvas from '../services/initCanvas';

const Canvas = ({ config }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasCfg = new CanvasConfig(canvasRef, config.height, config.width);
    initCanvas(canvasCfg, config);
    selectChart(config, canvasCfg);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
