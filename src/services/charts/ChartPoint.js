import Point from '../Point';
import { limitMinValue, limitMaxValue, axieYNumber } from '../caclFunction.js';
import { findMinValue, findMaxValue } from '../adaptiveData.js';
class ChartPoint {
  constructor(
    data,
    context,
    spacing,
    radius = 2,
    fillColor = 'black',
    strokeColor = 'black',
    height = innerHeight / 2,
    width = innerWidth,
    cfgToLine = false,
    cfgGrid = false
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

    this.margin = 25;

    this.cfgToline = cfgToLine;
    this.cfgGrid = cfgGrid;

    //-------------one or multiple data---------------
    // this.wichData = adaptiveData(cfgData, data);

    this.tag = data[0].tag;
    this.labels = data[0].data.labels;
    this.data = data[0].data.values;

    this.referenceData = data[0].data.values[0];

    //-----------------------------------------------------------------------------
    /* I use these variables to calculate a larger number 
    (from the largest number in the table) 
    to define a rounded up value, for example, for 610 => 700;
    for 8601 => 9000 */
    this.minValueOfData = findMinValue(this.data);
    this.maxValueOfData = findMaxValue(this.data);
    // TODO : crée une fonction qui recupere la --
    // TODO -- taille du tableau le plus grand dans data
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
      this.lowerSignificantDigit,
      this.maxValueOfData
    );
    //I store the result in another variable
    this.limitMinValue = this.calcMinValue;
    this.axieYNumberArrayFunction = axieYNumber(
      this.limitMaxValue,
      this.limitMinValue,
      this.referenceData
    );
    this.axieYNumberArray = this.axieYNumberArrayFunction;
    // sclae for => the largest value in the array = the height of the chart
    this.scaleH =
      (this.height - this.spacing) / (this.limitMaxValue - this.limitMinValue);
    // to create a column number based on the number of values
    this.ratioH = (this.height - this.spacing) / this.referenceData.length;
    // to create a column number based on the number of values
    this.ratioW = (this.width - this.spacing) / this.referenceData.length;
    // position X of the first column
    this.startColumn = this.spacing;
    // position Y of the first row
    this.startRow = this.spacing;
    // affected a new Point class
    this.twoPoint = new Point();
    this.counter = 0;
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
    this.drawLabels();

    this.drawNumber();
    this.initStartForClmnAndRow();
    this.drawArc();
    // this.axieYNumber();
  }

  // Generate a new array of values for y-axie
  // axieYNumber() {
  //   let yArray = [];

  //   let incrValue =
  //     (this.limitMaxValue - parseInt(this.limitMinValue)) /
  //     this.referenceData.length;
  //   console.log('referenceD :', this.referenceData.length);
  //   let value = parseInt(this.limitMinValue);
  //   for (let i = 0; i < this.referenceData.length + 1; i++) {
  //     console.log('refData, ', this.referenceData.length);
  //     yArray.push(Math.round(value).toString());
  //     value += incrValue;
  //   }
  //   return yArray;
  // }

  // Draw numbers on y axie
  drawNumber(data = this.referenceData) {
    for (let j = 0; j < data.length + 1; j++) {
      console.log('dataL ', data.length);
      this.counter += 1;
      console.log('counter :', this.counter);
      this.twoPoint.drawText(
        this.context,
        this.axieYNumberArray[j],
        this.margin,
        this.height
      );
      this.height -= this.ratioH;
    }
  }

  // Draw labels
  drawLabels(label = this.labels) {
    let nexPositionX = this.spacing;
    for (let i = 0; i < label.length; i++) {
      this.twoPoint.drawText(
        this.context,
        label[i],

        nexPositionX - this.context.measureText(label[i]).width / 2,
        this.height + this.margin
      );
      nexPositionX += this.ratioW;
    }
  }

  drawGrid(data = this.referenceData) {
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
    for (let j = 0; j < data.length; j++) {
      let value = data[j];
      for (let i = 0; i < value.length; i++) {
        this.twoPoint.drawLoop(
          value,
          this.context,
          this.startRow,
          this.height,
          this.startColumn,
          this.ratioW,
          this.scaleH,
          this.limitMinValue
        );
      }
    }
  }

  // draw arc for the points
  drawArc(data = this.data) {
    for (let j = 0; j < data.length; j++) {
      let value = data[j];

      for (let i = 0; i < value.length; i++) {
        this.context.beginPath();
        this.context.arc(
          // x position
          this.startColumn,
          // y position
          this.height - (value[i] - this.limitMinValue) * this.scaleH,
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
      this.initStartForClmnAndRow();
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
