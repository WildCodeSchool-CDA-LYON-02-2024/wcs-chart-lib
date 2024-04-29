import ChartPoint from './ChartPoint';

class ChartPie extends ChartPoint {
  constructor(
    data,
    themeObj,
    context,
    spacing,
    width = innerWidth,
    height = innerHeight / 2,
    radius = height - spacing
  ) {
    super(data, themeObj, context, spacing, height, width, null, null, radius);

    this.startX = width / 2;
    this.startY = height / 2;
    this.colorList = themeObj;
    this.data = data[0].data.values[0];
  }

  draw() {
    this.pieChart();
  }

  pieChart() {
    console.log(
      // this.data
      // this.context
      // this.colorList
      // this.startX
      // this.startY
      this.radius
    );
    this.twoPoint.drawPie(
      this.data,
      this.context,
      this.colorList,
      this.startX,
      this.startY,
      this.radius
    );
  }
}

export default ChartPie;
