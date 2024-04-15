import Point from './Point';

const initCanvas = (canvasCfg, config) => {
  //Init canvasCfg

  const height = config.height ? config.height : canvasCfg.canvas.height;
  const width = config.width ? config.width : canvasCfg.canvas.width;

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
};

export default initCanvas;
