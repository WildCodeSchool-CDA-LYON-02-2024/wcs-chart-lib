import Point from '../Point';
class ChartPoint {
  constructor(
    context,
    spacing,
    radius = 2,
    fillColor = 'black',
    strokeColor = 'black',
    height = innerHeight / 2,
    width = innerWidth,
    data = [0, 250, 50, 100, 200, 30, 10, 60, 200, 150, 6, 0, 300]
  ) {
    this.data = data;
    this.context = context;
    this.spacing = spacing;
    this.height = height - this.spacing;
    this.width = width - this.spacing;
    this.radius = radius;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    // sclae for => the largest value in the array = the height of the canvas
    this.scaleH = (this.height - this.spacing) / Math.max(...this.data);
    // to create a column number based on the number of values
    this.ratioH = (this.height - this.spacing) / this.data.length;
    // to create a column number based on the number of values
    this.ratioW = (this.width - this.spacing) / this.data.length;
    // position x of the point
    this.columnPoint = this.spacing + this.ratioW;
    this.rowPoint = this.spacing + this.ratioH;
    this.twoPoint = new Point();
    this.line = new Point();
  }

  drawPointArray() {
    this.drawGrid();
    this.initValue();
    this.drawLoopLine();
    this.initValue();
    this.drawArc();
  }

  drawGrid(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      // draw X grid
      this.twoPoint.drawLine(
        this.context,
        this.columnPoint,
        this.height,
        this.columnPoint,
        this.spacing,
        'grey'
      );
      // draw Y grid
      this.twoPoint.drawLine(
        this.context,
        this.spacing, // start x
        this.rowPoint - this.ratioH, // start y
        this.width, // end x
        this.rowPoint - this.ratioH, // end y
        'grey'
      );
      this.nextColumnAndRow();
    }
  }

  drawLoopLine(data = this.data) {
    this.line.drawLoop(
      data,
      this.context,
      this.spacing,
      this.height,
      this.columnPoint,
      this.ratioW,
      this.scaleH
    );
  }

  drawArc(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      this.context.beginPath();
      this.context.arc(
        // x position
        this.columnPoint,
        // y position
        this.height - data[i] * this.scaleH,
        // rayon
        this.radius,
        // start to angle 0
        0,
        // finish at 360°
        Math.PI * 2,
        this.color
      );
      // apply color
      this.context.fillStyle = this.fillColor;
      this.context.strokeStyle = this.strokeColor;

      // draw fill and stroke
      this.context.fill();
      this.context.stroke();

      this.nextColumnAndRow();
    }
  }

  // increment for next column or row
  nextColumnAndRow() {
    this.columnPoint += this.ratioW;
    this.rowPoint += this.ratioH;
  }

  // Init column and row start
  initValue() {
    this.columnPoint = this.spacing + this.ratioW;
    this.rowPoint = this.spacing + this.ratioH;
  }
}

export default ChartPoint;
