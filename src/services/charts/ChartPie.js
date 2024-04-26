import ChartPoint from './ChartPoint';

class ChartPie extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    width = innerWidth,
    height = innerHeight / 2,
    radius = height - spacing,

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
    this.data = data[0].data.values[0];
  }

  draw() {
    this.pieChart();
  }

  pieChart() {
    console.log('data :', this.data);
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
