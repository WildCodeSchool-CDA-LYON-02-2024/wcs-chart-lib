import ChartLine from './ChartLine.js';
import ChartPoint from './ChartPoint.js';
import ChartBar from './ChartBar.js';

const selectChart = (config, canvasCfg, dataset) => {
  let chart;
  switch (config.type) {
    case 'point':
      chart = new ChartPoint(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width,
        config.toLine,
        config.grid
      );
      chart.drawPointArray();
      break;
    case 'line':
      //TO DO
      chart = new ChartLine(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.height,
        config.width
      );

      chart.drawLineArray();

      break;
    case 'bar':
      chart = new ChartBar(
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width,
        data,
        config.toline
      );
      chart.drawBarArray();
      // TO DO
      break;
    default:
      chart = new ChartPoint(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width,
        config.toLine
      );
      chart.drawPointArray();
  }
};

export default selectChart;
