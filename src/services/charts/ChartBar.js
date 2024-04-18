import Point from '../Point';

class ChartBar {
  constructor(
    context,
    spacing,
    barWidth = 20,
    fillColor = 'black',
    strokeColor = 'black',
    height = innerHeight / 2,
    width = innerWidth,
    data = [0, 250, 50, 100, 200, 30, 10, 60, 200, 150, 6, 0, 300],
    cfgGrid = false
  ) {
    this.context = context;
    this.spacing = spacing;
    this.barWidth = barWidth;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.height = height - this.spacing;
    this.width = width - this.spacing;
    this.data = data;
    this.cfgGrid = cfgGrid;

    this.scaleH = (this.height - this.spacing) / Math.max(...this.data);
    this.ratioW = (this.width - this.spacing) / this.data.length;
    this.startX = this.spacing;
    this.startY = this.height;
    this.twoPoint = new Point();
  }

  drawBarArray() {
    if (this.cfgGrid === true) {
      this.drawGrid();
    }

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
        this.startY - data[i] * this.scaleH,
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
