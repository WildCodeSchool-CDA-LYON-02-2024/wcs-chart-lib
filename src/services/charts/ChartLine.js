import ChartPoint from './ChartPoint';

class ChartLine extends ChartPoint {
  constructor(context, spacing, height, width) {
    super(context, spacing, null, null, null, height, width);
  }
}

export default ChartLine;
