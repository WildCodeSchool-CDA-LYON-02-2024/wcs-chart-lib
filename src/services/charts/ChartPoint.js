import Point from '../Point';
class ChartPoint {
  constructor(
    context,
    spacing,
    height = innerHeight / 2 - spacing,
    width = innerWidth - spacing
  ) {
    this.pointArray = [0, 250, 50, 100, 200, 30, 10, 60, 200, 150, 6, 0];
    this.context = context;
    this.spacing = spacing;
    this.height = height;
    this.width = width;
    // ratio for => the largest value in the array = the height of the canvas
    this.scaleH = (this.height - this.spacing) / Math.max(...this.pointArray);
    this.ratioH = (this.height - this.spacing) / this.pointArray.length;
    // to create a column number based on the number of values
    this.ratioW = (this.width - this.spacing) / this.pointArray.length;
    // position x of the point
    this.columnPoint = this.spacing + this.ratioW;
    this.rowPoint = this.spacing + this.ratioH;
    this.twoPoint = new Point();

    console.log('this W', this.width);
    console.log('innerW', innerWidth);
    console.log('spacing', spacing);
    console.log('ratio W', this.ratioH);
  }

  drawPointArray() {
    // const twoPoint = new Point();
    for (let i = 0; i < this.pointArray.length; i++) {
      this.drawXgrid();

      this.context.beginPath();
      this.context.arc(
        // x position
        this.columnPoint,
        // y position
        this.height - this.pointArray[i] * this.scaleH,
        // rayon
        2,
        // start to angle 0
        0,
        // finish at 360°
        Math.PI * 2
      );

      this.context.fill();

      this.columnPoint += this.ratioW;
      this.rowPoint += this.ratioH;
      console.log('row', this.rowPoint);
    }
  }

  drawXgrid() {
    this.twoPoint.drawLine(
      this.context,
      this.columnPoint,
      this.height,
      this.columnPoint,
      this.spacing,
      'grey'
    );
    console.log('column', this.columnPoint);
    this.twoPoint.drawLine(
      this.context,
      this.spacing, // start x
      this.rowPoint - this.ratioH, // start y
      this.width, // end x
      this.rowPoint - this.ratioH, // end y
      'grey'
    );
  }
}

export default ChartPoint;
