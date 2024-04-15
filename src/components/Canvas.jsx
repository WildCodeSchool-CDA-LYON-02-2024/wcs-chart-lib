import { useEffect, useRef } from 'react';
import Point from '../services/Point';
import CanvasConfig from '../services/Canvas';
import selectChart from '../services/charts/selectChart';

const Canvas = ({ config }) => {
  const canvasRef = useRef(null);
  console.log('type', config.type);

  useEffect(() => {
    //Init canvasCfg
    const height = config.height ? config.height : canvasCfg.canvas.height;
    const width = config.width ? config.width : canvasCfg.canvas.width;
    const canvasCfg = new CanvasConfig(canvasRef);

    const loadedAxies = false;
    console.log('loaded axies :', loadedAxies);

    //Init point
    const twoPoint = new Point();

    // init x line
    twoPoint.drawLine(
      canvasCfg.context,
      canvasCfg.spacing,
      height - canvasCfg.spacing,
      width - canvasCfg.spacing,
      height - canvasCfg.spacing
    );

    // Init y line
    twoPoint.drawLine(
      canvasCfg.context,
      canvasCfg.spacing,
      canvasCfg.spacing,
      canvasCfg.spacing,
      height - canvasCfg.spacing
    );

    selectChart(config, canvasCfg);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
