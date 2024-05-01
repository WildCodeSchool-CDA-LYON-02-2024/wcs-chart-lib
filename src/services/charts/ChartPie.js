import ChartPoint from './ChartPoint';

class ChartPie extends ChartPoint {
  constructor(
    data,
    themeObj,
    context,
    spacing,
    height = innerHeight / 2,
    width = innerWidth,
    ratioWidth,
    ratioHeight,

    radius = width > height ? height / 2 - spacing / 2 : width / 2 - spacing / 2
  ) {
    super(
      data,
      themeObj,
      context,
      spacing,
      height,
      width,
      ratioWidth,
      ratioHeight,
      null,
      null,
      radius
    );
    this.radius = radius;
    this.startX = width / 2;
    this.startY = height / 2;
    this.colorList = themeObj;
    this.data = data[0].data.values[0];
  }

  draw() {
    this.pieChart();
  }

  pieChart() {
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
