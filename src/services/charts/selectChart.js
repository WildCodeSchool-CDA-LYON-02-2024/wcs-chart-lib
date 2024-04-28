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
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        // config.fillColor,
        themeObj?.fillColor,

        themeObj?.strokeColor,
        config.height,
        config.width,
        config.toLine,
        config.grid,
        themeObj?.lineColor,
        themeObj?.bordcolor
      );
      chart.drawPointArray();
      break;
    case 'line':
      //TO DO
      chart = new ChartLine(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.width,
        config.height
      );

      chart.drawLineArray();

      break;
    case 'bar':
      chart = new ChartBar(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.radius,
        config.fillColor,
        config.strokeColor,
        config.height,
        config.width,
        config.toline
      );
      chart.drawBarArray();
      // TO DO
      break;
    case 'pie':
      chart = new ChartPie(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.width,
        config.height,
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
