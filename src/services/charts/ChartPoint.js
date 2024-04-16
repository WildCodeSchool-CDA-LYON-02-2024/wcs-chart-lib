import Point from '../Point';
import { limitMinValue, limitMaxValue } from '../caclFunction.js';
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
    this.heightParams = height - this.spacing;
    this.height = this.heightParams;
    this.widthParams = width - this.spacing;
    this.width = this.widthParams;

    this.cfgToline = cfgToLine;
    this.cfgGrid = cfgGrid;
    this.tag = data[0].tag;
    this.labels = data[0].data.labels;
    this.data = data[0].data.values;

    //-----------------------------------------------------------------------------
    /* I use these variables to calculate a larger number 
    (from the largest number in the table) 
    to define a rounded up value, for example, for 610 => 700;
    for 8601 => 9000 */
    this.minValueOfData = Math.min(...this.data);
    this.maxValueOfData = Math.max(...this.data);
    this.mostSignificantDigitMax = [this.maxValueOfData.toString()[0]];
    this.mostSignificantDigitMin = [this.minValueOfData.toString()[0]];
    this.nbOfZeroOfMax = this.maxValueOfData.toString().length - 1;
    this.nbOfZeroOfMin = this.minValueOfData.toString().length - 1;

    this.higherSignificantDigit = parseInt(this.mostSignificantDigitMax) + 1;
    this.lowerSignificantDigit = parseInt(this.mostSignificantDigitMin) - 1;

    // ---------------------------------------------------------------------------

    //  return a value from the highest value in the array
    this.calcMaxValue = limitMaxValue(
      this.higherSignificantDigit.toString(),
      this.nbOfZeroOfMax
    );

    // I store the result in another variable
    this.limitMaxValue = this.calcMaxValue;

    //  return a value from the smallest value in the array
    this.calcMinValue = limitMinValue(
      this.minValueOfData,
      this.mostSignificantDigitMin,
      this.nbOfZeroOfMin,
      this.lowerSignificantDigit
    );
    //I store the result in another variable
    this.limitMinValue = this.calcMinValue;

    // sclae for => the largest value in the array = the height of the chart
    this.scaleH =
      (this.height - this.spacing) / (this.limitMaxValue - this.limitMinValue);
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
    console.log('max', this.limitMaxValue);
    console.log('min', this.limitMinValue);
    if (this.cfgGrid === true) {
      this.drawGrid();
    }

    this.initStartForClmnAndRow();
    if (this.cfgToline === true) {
      this.drawLoopLine();
    }
    this.drawNumber();

    this.initStartForClmnAndRow();
    this.drawArc();
    this.axieYNumber();
  }

  //Generate a new array of values for y-axie
  axieYNumber() {
    let yArray = [];
    let incrValue =
      (this.limitMaxValue - parseInt(this.limitMinValue)) / this.data.length;
    let value = parseInt(this.limitMinValue);
    for (let i = 0; i < this.data.length + 1; i++) {
      yArray.push(Math.round(value).toString());
      value += incrValue;
    }
    return yArray;
  }

  drawNumber(data = this.data) {
    for (let j = 0; j < data.length + 1; j++) {
      this.twoPoint.drawText(
        this.context,
        this.axieYNumber()[j],
        20,
        this.height
      );
      this.height -= this.ratioH;
    }
  }

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
      this.limitMinValue
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
        this.height - (data[i] - this.limitMinValue) * this.scaleH,
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
    this.height = this.heightParams;
  }
}

export default ChartPoint;
