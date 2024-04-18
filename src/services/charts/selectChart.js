import ChartLine from './ChartLine.js';
import ChartPoint from './ChartPoint.js';
import ChartBar from './ChartBar.js';

const selectChart = (config, canvasCfg, data) => {
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
        data,
        config.toLine,
        config.grid,
        config
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
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width,
        data,
        config.toLine
      );
      chart.drawPointArray();
  }
};

export default selectChart;
