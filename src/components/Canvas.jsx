import { useEffect, useRef } from 'react';
import Point from '../services/Point';
import CanvasConfig from '../services/Canvas';

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
      0,
      canvasCfg.canvas.height,
      canvasCfg.canvas.width,
      canvasCfg.canvas.height
    );

    // Init y line
    twoPoint.drawLine(canvasCfg.context, 0, 0, 0, canvasCfg.canvas.height);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
