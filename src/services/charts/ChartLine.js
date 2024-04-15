import ChartPoint from './ChartPoint';

class ChartLine extends ChartPoint {
  constructor(context, spacing, height, width, fillColor) {
    super(context, spacing, null, fillColor, null, height, width);
  }
  drawLineArray() {
    // draw grid
    this.drawGrid();
    // init value of row and column for draw again
    this.initValue();
    // draw line with an array and a loop : start to next point => to next point
    this.drawLoopLine();
  }
}

export default ChartLine;
