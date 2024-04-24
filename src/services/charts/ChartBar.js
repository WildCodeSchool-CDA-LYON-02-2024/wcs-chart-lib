import ChartPoint from './ChartPoint';

class ChartBar extends ChartPoint {
  constructor(data,context, spacing,barWidth = 200, fillColor = 'black', strokeColor = 'black',height = innerHeight / 2,width = innerWidth,cfgGrid = false) {
    super( data,context,spacing,2,fillColor,strokeColor,height,width,false,cfgGrid);
    this.barWidth = barWidth;
    this.startX = this.spacing;
  }

  drawBarArray() {
    // if (this.cfgGrid === true) {
    //   this.drawGrid();
    // }// init value of row and column for draw again
this.initStartForClmnAndRow();
this.drawGrid();

    this.initStartX();
    this.drawBars();
  }

  drawGrid(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      this.twoPoint.drawLine(
        this.context,
        this.startX,
        this.height,
        this.startX,
        this.spacing,
        'grey'
      );
      this.nextX();
    }
  }

  drawBars(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      this.context.fillStyle = this.fillColor;
      this.context.fillRect(
        this.startX,
        this.height - data[i] * this.scaleH,
        this.barWidth,
        data[i] * this.scaleH
      );
      this.nextX();
    }
  }

  nextX() {
    this.startX += this.ratioW;
  }

  initStartX() {
    this.startX = this.spacing;
  }
}

export default ChartBar;
