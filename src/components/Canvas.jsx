import { useEffect, useRef } from 'react';
import Point from '../services/Point';
import CanvasConfig from '../services/Canvas';
// import ChartPoint from '../services/charts/ChartPoint';
import selectChart from '../services/selectChart.js';

const Canvas = ({ type }) => {
  const canvasRef = useRef(null);
  console.log('type :', type);

  useEffect(() => {
    //Init canvasCfg
    const canvasCfg = new CanvasConfig(canvasRef);

    //Init point
    const twoPoint = new Point();

    // init x line
    twoPoint.drawLine(
      canvasCfg.context,
      canvasCfg.spacing,
      canvasCfg.canvas.height - canvasCfg.spacing,
      canvasCfg.canvas.width - canvasCfg.spacing,
      canvasCfg.canvas.height - canvasCfg.spacing
    );

    // Init y line
    twoPoint.drawLine(
      canvasCfg.context,
      canvasCfg.spacing,
      canvasCfg.spacing,
      canvasCfg.spacing,
      canvasCfg.canvas.height - canvasCfg.spacing
    );

    selectChart(type, canvasCfg);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
