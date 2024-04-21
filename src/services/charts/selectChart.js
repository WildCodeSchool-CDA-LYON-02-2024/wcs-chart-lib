import ChartLine from './ChartLine.js';
import ChartPie from './ChartPie.js';
import ChartPoint from './ChartPoint.js';

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
      chart = new ChartLine(dataset, canvasCfg.context, canvasCfg.spacing);

      chart.drawLineArray();

      break;
    case 'bar':
      // TO DO
      break;
    case 'pie':
      chart = new ChartPie(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        canvasCfg.width,
        canvasCfg.height
      );
      chart.drawPie();
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
