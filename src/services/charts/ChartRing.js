import ChartPoint from "./ChartPoint";

class ChartRing extends ChartPoint {
  constructor(
    data,
    context,
    spacing,
    width = innerWidth,
    height = innerHeight / 2,
    innerRadius = height - spacing,
    outerRadius = innerRadius + 30,

    colist = [
      "cornflowerblue",
      "salmon",
      "gold",
      "mediumseagreen",
      "mediumpurple",
      "tomato",
      "lightskyblue",
      "lightcoral",
      "khaki",
      "lightgreen",
      "skyblue",
      "lightpink",
      "lightsteelblue",
      "palegreen",
      "orchid",
      "palegoldenrod",
      "lightseagreen",
      "lightblue",
      "thistle",
      "lightyellow",
    ]
  ) {
    super(
      data,
      context,
      spacing,
      height,
      width,
      null,
      null,
      null,
      null,
      innerRadius
    );

    this.startX = width / 2;
    this.startY = height / 2;
    this.colorList = colist;
    this.outerRadius = outerRadius;
  }

  draw() {
    const {
      context,
      colorList,
      startX,
      startY,
      innerRadius,
      outerRadius,
      labels,
    } = this;

    // Dessiner le cercle extérieur
    context.beginPath();
    context.arc(startX, startY, outerRadius, 0, Math.PI * 2);
    context.fillStyle = "rgba(0, 0, 0, 0)"; // Fond transparent
    context.fill();
    context.closePath();

    // Dessiner le cercle intérieur avec une couleur spécifique pour chaque label
    const labelCount = labels.length;
    const segmentAngle = (Math.PI * 2) / labelCount;

    for (let i = 0; i < labelCount; i++) {
      const startAngle = i * segmentAngle;
      const endAngle = (i + 1) * segmentAngle;

      context.beginPath();
      context.arc(startX, startY, innerRadius, startAngle, endAngle);
      context.fillStyle = colorList[i % colorList.length]; // Utilisation de modulo pour boucler sur la liste des couleurs
      context.fill();
      context.closePath();
    }
  }
}

export default ChartRing;
