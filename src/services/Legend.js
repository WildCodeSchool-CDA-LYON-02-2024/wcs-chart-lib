class Legend {
  constructor() {}

  drawLegend(context, layout, canvas, spacing) {
    switch (layout) {
      case "onTop":
        this.drawLegendOnTheTop(context, canvas, spacing);
        break;
      case "inline":
        this.drawInlineLegend(context, canvas, spacing);
        break;
      case "blockLeft":
        this.drawBlockLeftLegend(context, canvas, spacing);
        break;
      case "blockRight":
        this.drawBlockRightLegend(context, canvas, spacing);
        break;
      default:
        break;
    }
  }

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
    context.fillText("Légende", canvas.width / 2, 25);
  }

  drawInlineLegend(context, canvas, spacing) {
    const legendHeight = spacing;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = canvas.height - legendHeight;

    context.fillStyle = "#dddddd";
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

    context.fillStyle = "#dddddd";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", legendX + legendWidth / 2, 40);
  }

  drawBlockRightLegend(context, canvas, spacing) {
    const legendHeight = canvas.height;
    const legendWidth = spacing;
    const legendX = canvas.width - legendWidth;
    const legendY = 0;

    context.fillStyle = "#dddddd";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", legendX + legendWidth / 2, 40);
  }
}

export default Legend;
