import ChartPoint from './ChartPoint';

class ChartBar extends ChartPoint {
  constructor(
    data,
    themeObj,
    context,
    spacing,
    height,
    width,
    ratioWidth,
    ratioHeight,
    cfgGrid,

    fillColor = 'black',
    strokeColor = 'black',
    barWidth = 15
  ) {
    super(
      data,
      themeObj,
      context,
      spacing,
      height,
      width,
      ratioWidth,
      ratioHeight,
      cfgGrid,
      null,
      fillColor,
      strokeColor,
      null,
      'bar'
    );
    this.barWidth = barWidth;

    //for determinate spacing between two chart bar (if multiple array of data)
    this.multipleBarSpacing = this.ratioW / 4;
  }

  drawBarArray() {
    //Init grid
    this.drawGrid();
    // draw labels
    this.drawLabels();
    // Init column and row after grid
    this.initStartForClmnAndRow();
    // Draw graph Bar
    this.drawBars();
    // I draw those numbers
    this.drawNumber();
  }

  drawBars(data = this.data) {
    for (let j = 0; j < data.length; j++) {
      let value = data[j];
      let color = this.fillColor[j];
      if (data.length === 1) {
        this.multipleBarSpacing = 0;
      }
      for (let i = 0; i < value.length; i++) {
        this.context.fillStyle = color;

        this.context.fillRect(
          /// we did / 2 to put everything ob place in good pos in the chart
          this.startColumn +
            this.ratioW / 2 -
            this.barWidth / 2 +
            this.multipleBarSpacing,
          this.height - (value[i] - this.limitMinValue) * this.scaleH,
          this.barWidth,
          (value[i] - this.limitMinValue) * this.scaleH
        );
        this.nextColumnAndRow();
      }
      this.multipleBarSpacing -= this.multipleBarSpacing * 2;
      this.initStartForClmnAndRow();
    }
  }
}

export default ChartBar;
