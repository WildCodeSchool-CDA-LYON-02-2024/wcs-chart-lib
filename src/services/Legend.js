class Legend {
  constructor(data) {
    this.labels = data[0].data.labels;
    this.data = data[0].data.values;
  }

  drawLegend(context, layout, canvas, spacing) {
    switch (layout) {
      case "onTop":
        this.drawLegendOnTheTop(context, canvas, spacing);
        break;
      case "inline":
        this.drawInlineLegend(context, canvas, spacing);
        break;
      case 'blockLeft':
        this.drawBlockLeftLegend(context, canvas, spacing);
        break;
      case 'blockRight':
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

    context.fillStyle = "#dddddd";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Legend", canvas.width / 2, 25);

    const labelSpacing = 20;
    let yPosition = 30;

    for (let i = 0; i < this.labels.length; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      context.fillStyle = randomColor;
      context.fillRect(legendX + 2, yPosition, 10, 10);

      context.fillStyle = "black";
      context.font = "14px Roboto";
      context.fillText(this.labels[i], legendX + 50, yPosition + 5);

      yPosition += labelSpacing;
    }
  }

  drawInlineLegend(context, canvas, spacing) {
    const legendHeight = spacing;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = canvas.height - legendHeight;

    context.fillStyle = '#dddddd';
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", canvas.width / 2, legendY + 90);
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
      context.fillText(this.labels[i], legendX + 20, yPosition + 40);

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
