import ChartPoint from "./ChartPoint.js";

class KiviatChart extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    radius = 2,
    fillColor = "black",
    strokeColor = "black",
    height = innerHeight / 2,
    width = innerWidth,
    cfgToLine = false,
    cfgGrid = false
  ) {
    super(
      data,
      context,
      spacing,
      radius,
      fillColor,
      strokeColor,
      height,
      width,
      cfgToLine,
      cfgGrid
    );
  }

  drawPointArray() {
    super.drawPointArray();

    this.drawLines();
  }

  drawLines() {
    const numLabels = this.labels.length;
    const angleIncrement = (2 * Math.PI) / numLabels;
    let angle = 0;

    for (let i = 0; i < numLabels; i++) {
      const value = this.data[i];
      const percentage = value / this.limitMaxValue;
      const endX =
        this.width / 2 +
        Math.cos(angle) * (this.width / 2 - this.spacing) * percentage;
      const endY =
        this.height / 2 +
        Math.sin(angle) * (this.height / 2 - this.spacing) * percentage;

      this.context.beginPath();
      this.context.moveTo(this.width / 2, this.height / 2);
      this.context.lineTo(endX, endY);
      this.context.strokeStyle = "black";
      this.context.stroke();

      angle += angleIncrement;
    }
  }
}

export default KiviatChart;
