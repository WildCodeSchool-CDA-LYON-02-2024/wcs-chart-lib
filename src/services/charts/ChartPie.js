import ChartPoint from './ChartPoint';
import Point from '../Point';

class ChartPie extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    startX = innerWidth / 2,
    startY = innerHeight / 4,
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
    super(data, context, spacing);
    this.data = data[0].data.values;
    this.context = context;
    this.startX = startX;
    this.startY = startY;
    this.colorList = colist;
  }

  drawPie(radius = 200) {
    console.log('this.TwoPoint', this.twoPoint);

    let total = 0;
    let lastEnd = 0;
    let offset = Math.PI / 2;
    for (let j = 0; j < this.data.length; j++) {
      total += this.data[j];
    }
    for (let i = 0; i < this.data.length; i++) {
      this.context.fillStyle = this.colorList[i];
      let value = this.data[i];
      let arcSector = Math.PI * ((2 * value) / total);
      this.context.beginPath();
      this.context.moveTo(this.startX, this.startY);
      this.context.arc(
        this.startX,
        this.startY,
        radius,
        lastEnd - offset,
        lastEnd + arcSector - offset
      );
      this.context.fill();
      this.context.stroke();
      lastEnd += arcSector;
    }
  }

  drawPieChart() {
    this.twoPoint.drawPie(
      this.data,
      this.context,
      this.colorList,
      this.startX,
      this.startY
    );
    console.log('twoPoint', this.twoPoint.drawPie);
  }
}

export default ChartPie;
