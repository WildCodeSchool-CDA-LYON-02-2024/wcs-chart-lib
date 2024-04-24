import ChartPoint from './ChartPoint';

class ChartBar extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    barWidth = 200,
    fillColor = 'black',
    strokeColor = 'black',
    height = innerHeight / 2,
    width = innerWidth,
    cfgGrid = false
  ) {
    super(
      data,
      context,
      spacing,
      2,
      fillColor,
      strokeColor,
      height,
      width,
      false,
      cfgGrid
    );
    this.barWidth = barWidth;
  }

  drawBarArray() {
    //Init grid
    this.drawGrid();
    // Init column and row after grid
    this.initStartForClmnAndRow();
    // Draw graph Bar
    this.drawBars();
  }

  drawBars(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      this.context.fillStyle = this.fillColor;
      this.context.fillRect(
        this.startColumn + this.ratioW / 2 - this.barWidth / 2,
        this.height - data[i] * this.scaleH,
        this.barWidth,
        data[i] * this.scaleH
      );
      this.nextColumnAndRow();
    }
  }
}

export default ChartBar;
