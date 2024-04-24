import ChartLine from "./ChartLine.js";
import ChartPie from "./ChartPie.js";
import ChartPoint from "./ChartPoint.js";
import ChartBar from "./ChartBar.js";
import KiviatChart from "./Kiviat.js";

const selectChart = (config, canvasCfg, dataset) => {
  let chart;
  switch (config.type) {
    case "point":
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
    case "line":
      chart = new ChartLine(
        dataset,
        canvasCfg.context,
        canvasCfg.spacing,
        config.width,
        config.height
      );
      chart.drawLineArray();
      break;
    case "bar":
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
      break;
    case "pie":
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
    case "kiviat":
      chart = new KiviatChart(
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
