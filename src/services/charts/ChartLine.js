import ChartPoint from './ChartPoint';

class ChartLine extends ChartPoint {
  constructor(data, context, spacing, height, width, fillColor) {
    super(data, context, spacing, null, fillColor, null, height, width);
  }

  drawLineArray() {
    // draw grid
    this.drawGrid();
    // init value of row and column for draw again
    this.initStartForClmnAndRow();
    // draw line with an array and a loop : start to next point => to next point
    this.drawLoopLine();
    this.axieYNumber();
    this.drawNumber();
  }
}

export default ChartLine;
