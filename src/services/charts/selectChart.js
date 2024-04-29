import ChartLine from './ChartLine.js';
import ChartPie from './ChartPie.js';
import ChartPoint from './ChartPoint.js';
import ChartBar from './ChartBar.js';

const selectChart = (config, canvasCfg, dataset, themeObj) => {
  let chart;
  switch (config.type) {
    case 'point':
      chart = new ChartPoint(
        dataset,
        themeObj,
        canvasCfg.context,
        canvasCfg.spacing,
        config.height,
        config.width,
        config.grid,
        config.toLine,
        config.radius,
        config.type
      );
      chart.drawPointArray();
      break;
    case 'line':
      //TO DO
      chart = new ChartLine(
        dataset,
        themeObj,
        canvasCfg.context,
        canvasCfg.spacing,
        config.height,
        config.width,
        config.grid
      );

      chart.drawLineArray();

      break;
    case 'bar':
      chart = new ChartBar(
        dataset,
        themeObj,
        canvasCfg.context,
        canvasCfg.spacing,
        config.height,
        config.width,
        config.grid,

        config.fillColor,
        config.strokeColor,
        config.barWidth
      );
      chart.drawBarArray();
      // TO DO
      break;
    case 'pie':
      chart = new ChartPie(
        dataset,
        themeObj,
        canvasCfg.context,
        canvasCfg.spacing,
        config.height,
        config.width,
        config.radius
      );
      chart.draw();
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
