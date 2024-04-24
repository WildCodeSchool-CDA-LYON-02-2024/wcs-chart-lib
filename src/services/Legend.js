class Legend {
  constructor(data) {
    this.labels = data[0].data.labels;
    this.data = data[0].data.values;
  }

  drawLegend(context, layout, canvas, spacing) {
    switch (layout) {
      case "onTop": // ? changer le nom en top ?
        this.drawLegendOnTheTop(context, canvas, spacing);
        break;
      case "inline": // ? changer le nom en bottom ?
        this.drawInlineLegend(context, canvas, spacing);
        break;
      case "blockLeft": // ? changer le nom en left ?
        this.drawBlockLeftLegend(context, canvas, spacing);
        break;
      case "blockRight": // ? changer le nom en right ?
        this.drawBlockRightLegend(context, canvas, spacing);
        break;
      default:
        break;
    }
  }
  // TODO : changer légende en fonction du style de graphique (actuellement adapté au camembert, mais quand une ligne il ne faut qu'un titre, dans les barres il faut les couleurs avec les labels)
  drawLegendOnTheTop(context, canvas, spacing) {
    const legendHeight = spacing;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = 0;

    context.fillStyle = "transparent";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", canvas.width / 2, 20);

    const labelSpacing = 120;
    let totalLabelsWidth = this.labels.length * labelSpacing - 10;
    let startX = (canvas.width - totalLabelsWidth) / 2;

    for (let i = 0; i < this.labels.length; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      context.fillStyle = randomColor;
      context.fillRect(startX, 40, 10, 10);

      context.fillStyle = "black";
      context.font = "14px Roboto";
      context.fillText(this.labels[i], startX + 50, 50);

      startX += labelSpacing;
    }
  }

  drawInlineLegend(context, canvas, spacing) {
    const legendHeight = spacing;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = canvas.height - spacing;

    context.fillStyle = "transparent";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", canvas.width / 2, 400);

    const labelSpacing = 120;
    let totalLabelsWidth = this.labels.length * labelSpacing - 10;
    let startX = (canvas.width - totalLabelsWidth) / 2;

    for (let i = 0; i < this.labels.length; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      context.fillStyle = randomColor;
      context.fillRect(startX, 420, 10, 10);

      context.fillStyle = "black";
      context.font = "14px Roboto";
      context.fillText(this.labels[i], startX + 50, 430);

      startX += labelSpacing;
    }
  }

  drawBlockLeftLegend(context, canvas, spacing) {
    const legendHeight = canvas.height;
    const legendWidth = spacing;
    const legendX = 0;
    const legendY = 0;

    context.fillStyle = "transparent";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "left";
    context.fillText("Légende", 5, 30);

    const labelSpacing = 20;
    let yPosition = 60;

    for (let i = 0; i < this.labels.length; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      context.fillStyle = randomColor;
      context.fillRect(legendX + 2, yPosition + 30, 10, 10);

      context.fillStyle = "black";
      context.font = "14px Roboto";
      context.fillText(this.labels[i], legendX, yPosition + 40);

      yPosition += labelSpacing;
    }
  }

  drawBlockRightLegend(context, canvas, spacing) {
    const legendHeight = canvas.height;
    const legendWidth = spacing;
    const legendX = canvas.width - legendWidth;
    const legendY = 0;

    context.fillStyle = "transparent";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", legendX + legendWidth / 2, 40);

    const labelSpacing = 20;
    let yPosition = 60;

    for (let i = 0; i < this.labels.length; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      context.fillStyle = randomColor;
      context.fillRect(legendX + 5, yPosition + 30, 10, 10);

      context.fillStyle = "black";
      context.font = "14px Roboto";
      context.fillText(this.labels[i], legendX + 55, yPosition + 40);

      yPosition += labelSpacing;
    }
  }
}

export default Legend;
