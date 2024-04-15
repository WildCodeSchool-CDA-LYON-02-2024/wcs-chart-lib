import ChartPoint from './ChartPoint.js';

const selectChart = (config, canvasCfg) => {
  let chartPoint;
  switch (config.type) {
    case 'point':
      chartPoint = new ChartPoint(
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width
      );
      chartPoint.drawPointArray();
      break;
    case 'line':
      //TO DO
      break;
    case 'bar':
      // TO DO
      break;
    default:
      console.error('You have to select the type of the chart');
  }
};

export default selectChart;
