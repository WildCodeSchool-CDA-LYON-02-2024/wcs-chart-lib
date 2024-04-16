import ChartLine from './ChartLine.js';
import ChartPoint from './ChartPoint.js';

const selectChart = (config, canvasCfg, dataset) => {
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
        config.width,
        config.toLine,
        config.grid,
        dataset
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

      chart.drawLineArray();

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
        config.width,
        dataset,
        config.toLine
      );
      chart.drawPointArray();
  }
};

export default selectChart;
