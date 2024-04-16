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
    cfgToLine = false,
    cfgGrid = false,
    data
  ) {
    this.context = context;
    // -----------------CONFIG CHART VALUES --------------------//
    this.spacing = spacing;
    this.radius = radius;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.height = height - this.spacing;
    this.width = width - this.spacing;
    this.cfgToline = cfgToLine;
    this.cfgGrid = cfgGrid;
    this.tag = data[0].tag;
    this.labels = data[0].data.labels;
    this.data = data[0].data.values;

    this.minValueOfData = Math.min(...this.data);
    this.maxValueOfData = Math.max(...this.data);

    //-----------------------------------------------------------------------------
    /* I use these variables to calculate a larger number 
    (from the largest number in the table) 
    to define a rounded up value, for example, for 610 => 700;
    for 8601 => 9000 */
    this.mostSignificantDigit = [this.maxValueOfData.toString()[0]];
    this.nbOfZero = this.maxValueOfData.toString().length - 1;
    this.higherSignificantDigit = parseInt(this.mostSignificantDigit) + 1;

    this.limitValue = (
      higherSignDigit = this.higherSignificantDigit.toString()
    ) => {
      let newStr = '';
      for (let i = 0; i < this.nbOfZero; i++) {
        newStr += '0';
      }
      return (higherSignDigit += newStr);
    };
    // ---------------------------------------------------------------------------
    // sclae for => the largest value in the array = the height of the chart
    this.scaleH =
      (this.height - this.spacing) /
      // i do this calc, because the Ystart of the chart is not 0 but he min value of data
      (this.limitValue() - this.minValueOfData);

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
    // console.log('limit value', this.limitValue());
    // this.initLimitValue();

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

  // initLimitValue() {
  //   let newStr = '';
  //   for (let i = 0; i < this.nbOfZero; i++) {
  //     newStr += '0';
  //   }
  //   this.limitValue += newStr;
  // }

  drawGrid(data = this.data) {
    for (let i = 0; i < data.length; i++) {
      // draw X grid

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
      this.scaleH,
      this.minValueOfData
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
        this.height - (data[i] - this.minValueOfData) * this.scaleH,
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
