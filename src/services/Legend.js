class Legend {
  constructor() {}

  drawLegend(context, layout, canvas) {
    switch (layout) {
      case "inline":
        this.drawInlineLegend(context, canvas);
        break;
      case "blockLeft":
        this.drawBlockLeftLegend(context, canvas);
        break;
      case "blockRight":
        this.drawBlockRightLegend(context, canvas);
        break;
      default:
        break;
    }
  }

  drawInlineLegend(context, canvas) {
    const legendHeight = 200;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = canvas.height - legendHeight;

    context.fillStyle = "#dddddd";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", canvas.width / 2, legendY + 40);
  }

  drawBlockLeftLegend(context, canvas) {
    const legendHeight = canvas.height;
    const legendWidth = 200;
    const legendX = 0;
    const legendY = 0;

    context.fillStyle = "#dddddd";
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = "black";
    context.font = "bold 24px Roboto";
    context.textAlign = "center";
    context.fillText("Légende", legendX + legendWidth / 2, 40);
  }

  drawBlockRightLegend(context, canvas) {
    const legendHeight = canvas.height;
    const legendWidth = 200;
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
