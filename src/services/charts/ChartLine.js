import ChartPoint from './ChartPoint';

class ChartLine extends ChartPoint {
  constructor(data, context, spacing, height, width, cfgGrid, fillColor) {
    super(data, context, spacing, height, width, cfgGrid, fillColor);
  }

  drawLineArray() {
    // draw grid
    this.drawGrid();
    // init value of row and column for draw again
    this.initStartForClmnAndRow();
    // draw labels
    this.drawLabels();
    // draw line with an array and a loop : start to next point => to next point
    this.drawLoopLine();

    // I draw those numbers
    this.drawNumber();
  }
}

export default ChartLine;
