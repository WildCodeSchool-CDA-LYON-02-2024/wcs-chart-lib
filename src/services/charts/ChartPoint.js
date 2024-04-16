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
    data = [0, 250, 50, 100, 200, 30, 10, 60, 200, 150, 6, 0, 300],
    cfgToLine = false,
    cfgGrid = false
  ) {
    this.context = context;
    // -----------------CONFIG CHART VALUES --------------------//
    this.spacing = spacing;
    this.radius = radius;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.height = height - this.spacing;
    this.width = width - this.spacing;
    this.data = data;
    this.cfgToline = cfgToLine;
    this.cfgGrid = cfgGrid;

    // sclae for => the largest value in the array = the height of the canvas
    this.scaleH = (this.height - this.spacing) / Math.max(...this.data);
    // to create a column number based on the number of values
    this.ratioH = (this.height - this.spacing) / this.data.length;
    // to create a column number based on the number of values
    this.ratioW = (this.width - this.spacing) / this.data.length;
    // position X of the first column
    this.startColumn = this.spacing;
    // position Y of the first row
    this.startRow = this.spacing;
    // affected a new Point class
    this.twoPoint = new Point();
  }

  // main function
  drawPointArray() {
    if (this.cfgGrid === true) {
      this.drawGrid();
    }

    this.initStartForClmnAndRow();
    if (this.cfgToline === true) {
      this.drawLoopLine();
    }

    this.initStartForClmnAndRow();
    this.drawArc();
  }

  drawGrid(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      // draw X grid
      console.log('this.startColumn', this.startColumn);
      console.log('this.startRow', this.startRow);
      this.twoPoint.drawLine(
        this.context,
        this.startColumn,
        this.height,
        this.startColumn,
        this.spacing,
        'grey'
      );
      // draw Y grid
      this.twoPoint.drawLine(
        this.context,
        this.spacing, // start x
        this.startRow, // start y
        this.width, // end x
        this.startRow, // end y
        'grey'
      );
      this.nextColumnAndRow();
    }
  }

  // draw a line between several points with a loop
  drawLoopLine(data = this.data) {
    this.twoPoint.drawLoop(
      data,
      this.context,
      this.startRow,
      this.height,
      this.startColumn,
      this.ratioW,
      this.scaleH
    );
  }

  // draw arc for the points
  drawArc(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      this.context.beginPath();
      this.context.arc(
        // x position
        this.startColumn,
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
    this.startColumn += this.ratioW;
    this.startRow += this.ratioH;
  }

  // Init column and row start
  initStartForClmnAndRow() {
    this.startColumn = this.spacing;
    this.startRow = this.spacing;
  }
}

export default ChartPoint;
