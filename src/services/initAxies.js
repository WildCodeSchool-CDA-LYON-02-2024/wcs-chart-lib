import Point from './Point';

//Init height and width axies
const initAxies = (canvasCfg, config) => {
  // Init height and witdh if there is config from the client or not
  const height = config.height ? config.height : canvasCfg.canvas.height;
  const width = config.width ? config.width : canvasCfg.canvas.width;

  //affected a new point class
  const twoPoint = new Point();

  // Init x line
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

export default initAxies;
