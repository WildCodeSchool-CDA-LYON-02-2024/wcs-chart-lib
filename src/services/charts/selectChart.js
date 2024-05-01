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
        canvasCfg.canvas.height,
        canvasCfg.canvas.width,
        canvasCfg.ratioWidth,
        canvasCfg.ratioHeight,
        config.grid,
        config.toLine,
        config.radius,
        config.type
      );
      chart.drawPointArray();
      break;
    case 'line':
      chart = new ChartLine(
        dataset,
        themeObj,
        canvasCfg.context,
        canvasCfg.spacing,
        canvasCfg.canvas.height,
        canvasCfg.canvas.width,
        canvasCfg.ratioWidth,
        canvasCfg.ratioHeight,
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
        canvasCfg.canvas.height,
        canvasCfg.canvas.width,
        canvasCfg.ratioWidth,
        canvasCfg.ratioHeight,
        config.grid,

        config.fillColor,
        config.strokeColor,
        config.barWidth
      );
      chart.drawBarArray();

      break;
    case 'pie':
      chart = new ChartPie(
        dataset,
        themeObj?.themeForChartPie,
        canvasCfg.context,
        canvasCfg.spacing,
        canvasCfg.canvas.height,
        canvasCfg.canvas.width,
        canvasCfg.ratioWidth,
        canvasCfg.ratioHeight,
        config.radius
      );
      chart.draw();
      break;
    default:
      chart = new ChartPoint(
        dataset,
        themeObj,
        canvasCfg.context,
        canvasCfg.spacing,
        canvasCfg.canvas.height,
        canvasCfg.canvas.width,
        canvasCfg.ratioWidth,
        canvasCfg.ratioHeight,
        config.grid,
        config.toLine,
        config.radius,
        config.type
      );
      chart.drawPointArray();
  }
};

export default selectChart;
