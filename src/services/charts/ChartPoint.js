import Point from '../Point';
class ChartPoint {
  constructor(context, height = innerHeight / 2, width = innerWidth) {
    this.pointArray = [10, 40, 50, 100, 300, 30, 10, 60, 200, 150, 6];
    this.context = context;
    this.height = height;
    this.width = width;
    // ratio for => the largest value in the array = the height of the canvas
    this.ratioH = height / Math.max(...this.pointArray) - 0.01;
    // to create a column number based on the number of values
    this.ratioW = width / this.pointArray.length;
    // position x of the point = in the middle of the column
    this.columnPoint = this.ratioW / 2;
  }

  drawPointArray() {
    for (let i = 0; i < this.pointArray.length; i++) {
      this.context.beginPath();
      this.context.arc(
        // x position
        this.columnPoint,
        // y position
        this.height - this.pointArray[i] * this.ratioH,
        // rayon
        2,
        // start to angle 0
        0,
        // finish at 360°
        Math.PI * 2
      );
      this.context.fill();
      this.columnPoint += this.ratioW;
    }
  }
}

export default ChartPoint;
