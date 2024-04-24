import ChartPoint from './ChartPoint';

class ChartPie extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    width = innerWidth,
    height = innerHeight / 2,
    radius = width - spacing / 2,

    colist = [
      'cornflowerblue',
      'salmon',
      'gold',
      'mediumseagreen',
      'mediumpurple',
      'tomato',
      'lightskyblue',
      'lightcoral',
      'khaki',
      'lightgreen',
      'skyblue',
      'lightpink',
      'lightsteelblue',
      'palegreen',
      'orchid',
      'palegoldenrod',
      'lightseagreen',
      'lightblue',
      'thistle',
      'lightyellow',
    ]
  ) {
    super(data, context, spacing, radius, null, null, width, height);

    this.startX = width / 2;
    this.startY = height / 2;
    this.colorList = colist;
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
