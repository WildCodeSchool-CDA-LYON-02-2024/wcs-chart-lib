import ChartPoint from './ChartPoint';

class ChartLine extends ChartPoint {
  constructor(data, context, spacing, fillColor, width, height) {
    super(data, context, spacing, null, fillColor, null, width, height);
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
    // Return array of number !== data, for y axie
    this.axieYNumber();
    // I draw those numbers
    this.drawNumber();
  }
}

export default ChartLine;
