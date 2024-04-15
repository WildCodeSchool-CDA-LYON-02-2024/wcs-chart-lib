import ChartPoint from './charts/ChartPoint.js';

const selectChart = (type, canvasCfg) => {
  if (type === 'point') {
    const chartPoint = new ChartPoint(
      canvasCfg.context,
      canvasCfg.spacing,
      5,
      'red'
    );
    chartPoint.drawPointArray();
  }
};

export default selectChart;
