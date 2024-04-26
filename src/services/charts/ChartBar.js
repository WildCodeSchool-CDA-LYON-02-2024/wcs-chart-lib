import ChartPoint from './ChartPoint';

class ChartBar extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    height = innerHeight / 2,
    width = innerWidth,
    cfgGrid = false,
    cfgToLine = false,
    fillColor = 'black',
    strokeColor = 'black',
    barWidth = 200
  ) {
    super(
      data,
      context,
      spacing,
      height,
      width,
      cfgGrid,
      cfgToLine,
      fillColor,
      strokeColor,
      barWidth
    );
    this.barWidth = barWidth;
    //for determinate spacing between two chart bar (if multiple array of data)
    this.multipleBarSpacing = this.ratioW / 4;
  }

  drawBarArray() {
    //Init grid
    this.drawGrid();
    // Init column and row after grid
    this.initStartForClmnAndRow();
    // Draw graph Bar
    this.drawBars();
    // I draw those numbers
    this.drawNumber();
  }

  drawBars(data = this.data) {
    for (let value of data) {
      if (data.length === 1) {
        this.multipleBarSpacing = 0;
      }
      for (let i = 0; i < value.length; i++) {
        this.context.fillStyle = this.fillColor;
        this.context.fillRect(
          /// we did / 2 to put everything ob place in good pos in the chart
          this.startColumn +
            this.ratioW / 2 -
            this.barWidth / 2 +
            this.multipleBarSpacing,
          this.height - value[i] * this.scaleH,
          this.barWidth,
          value[i] * this.scaleH
        );
        this.nextColumnAndRow();
      }
      this.multipleBarSpacing -= this.multipleBarSpacing * 2;
      this.initStartForClmnAndRow();
    }
  }
}

export default ChartBar;
