import ChartLine from './ChartLine.js';
import ChartPoint from './ChartPoint.js';

const selectChart = (config, canvasCfg) => {
  let chart;
  switch (config.type) {
    case 'point':
      chart = new ChartPoint(
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width
      );
      chart.drawPointArray();
      break;
    case 'line':
      //TO DO
      chart = new ChartLine(
        canvasCfg.context,
        canvasCfg.spacing,
        config.height,
        config.width
      );

      chart.drawGrid();
      break;
    case 'bar':
      // TO DO
      break;
    default:
      chart = new ChartPoint(
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width
      );
      chart.drawPointArray();
  }
};

export default selectChart;
