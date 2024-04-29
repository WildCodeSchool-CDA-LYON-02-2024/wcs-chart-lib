class Legend {
  constructor(data) {
    this.labels = data[0].data.labels;
    this.tag = data[0].tag;
    this.data = data[0].data.values;
  }

  drawLegend(context, layout, canvas, spacing, configType, themeObj) {
    switch (layout) {
      case 'top': // ? changer le nom en top ?
        this.drawLegendOnTheTop(context, canvas, spacing, configType, themeObj);
        break;
      case 'bottom': // ? changer le nom en bottom ?
        this.drawInlineLegend(context, canvas, spacing, configType, themeObj);
        break;
      case 'left': // ? changer le nom en left ?
        this.drawBlockLeftLegend(
          context,
          canvas,
          spacing,
          configType,
          themeObj
        );
        break;
      case 'right': // ? changer le nom en right ?
        this.drawBlockRightLegend(
          context,
          canvas,
          spacing,
          configType,
          themeObj
        );
        break;
      default:
        break;
    }
  }
  drawLegendOnTheTop(context, canvas, spacing, configType, themeObj) {
    const legendHeight = spacing;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = 0;

    context.fillStyle = 'transparent';
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = 'black';
    context.font = `bold 24px ${themeObj?.font}`;
    context.textAlign = 'center';
    context.fillText('Légende', canvas.width / 2, 20);

    let startX = 50;
    let startY = 40;
    const spaceBetweenSquareAndLabel = 50;
    if (configType === 'pie') {
      for (let i = 0; i < this.labels.length; i++) {
        const label = this.labels[i];

        // Calcul :  largeur du label + carré + espacement
        const labelWidth =
          context.measureText(label).width + spaceBetweenSquareAndLabel;

        if (startX + labelWidth > legendWidth - 10) {
          startX = 50;
          startY += 20;
        }

        const color = themeObj?.themeForChartPie[i];
        context.fillStyle = color;
        context.fillRect(startX - 30, startY - 10, 10, 10);

        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(label, startX + 20, startY);

        startX += labelWidth;
      }
    } else {
      startX = canvas.width / 2;
      for (let i = 0; i < this.tag.length; i++) {
        context.fillStyle = themeObj?.fillColor[i];
        context.fillRect(startX - 30, startY - 10, 10, 10);
        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(this.tag[i], startX + 20, startY);
        startX += spacing;
      }
    }
  }

  drawInlineLegend(context, canvas, spacing, configType, themeObj) {
    const legendHeight = spacing;
    const legendWidth = canvas.width;
    const legendX = 0;
    const legendY = canvas.height - spacing;

    context.fillStyle = 'transparent';
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = 'black';
    context.font = `bold 24px ${themeObj?.font}`;
    context.textAlign = 'center';
    context.fillText('Légende', canvas.width / 2, canvas.height - 50);

    let startX = 10;
    let startY = canvas.height - 40;
    const spaceBetweenSquareAndLabel = 50;

    if (configType === 'pie') {
      for (let i = 0; i < this.labels.length; i++) {
        const label = this.labels[i];
        const labelWidth =
          context.measureText(label).width + spaceBetweenSquareAndLabel;

        // Vérifier si label > largeur du canevas
        if (startX + labelWidth > legendWidth - 10) {
          // Passer à la ligne suivante
          startX = 10;
          startY += 20;
        }

        const color = themeObj?.themeForChartPie[i];
        context.fillStyle = color;

        context.fillRect(startX, startY, 10, 10);
        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(label, startX + 50, startY + 10);
        startX += labelWidth;
      }
    } else {
      startX = canvas.width / 2;
      console.log('color : ', themeObj?.fillColor);
      for (let i = 0; i < this.tag.length; i++) {
        context.fillStyle = themeObj?.fillColor[i];
        context.fillRect(startX, startY, 10, 10);
        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(this.tag[i], startX + 50, startY + 10);
        startX += 100;
      }
    }
  }

  drawBlockLeftLegend(context, canvas, spacing, configType, themeObj) {
    const legendHeight = canvas.height;
    const legendWidth = spacing;
    const legendX = 0;
    const legendY = 0;

    context.fillStyle = 'transparent';
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = 'black';
    context.font = `bold 24px ${themeObj?.font}`;
    context.textAlign = 'left';
    context.fillText('Légende', 5, 30);

    const labelSpacing = 20;
    let yPosition = 60;

    if (configType === 'pie') {
      for (let i = 0; i < this.labels.length; i++) {
        const color = themeObj?.themeForChartPie[i];
        context.fillStyle = color;
        context.fillRect(legendX + 2, yPosition + 30, 10, 10);

        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(this.labels[i], legendX + 20, yPosition + 40);

        yPosition += labelSpacing;
      }
    } else {
      yPosition = 15;
      for (let i = 0; i < this.tag.length; i++) {
        context.fillStyle = themeObj?.fillColor[i];
        context.fillRect(legendX + 2, yPosition + 30, 10, 10);
        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(this.tag[i], legendX + 20, yPosition + 40);
        yPosition += 20;
      }
    }
  }

  drawBlockRightLegend(context, canvas, spacing, configType, themeObj) {
    const legendHeight = canvas.height;
    const legendWidth = spacing + 50;
    const legendX = canvas.width - legendWidth;
    const legendY = 0;

    context.fillStyle = 'transparent';
    context.fillRect(legendX, legendY, legendWidth, legendHeight);

    context.fillStyle = 'black';
    context.font = `bold 24px ${themeObj?.font}`;
    context.textAlign = 'center';
    context.fillText('Légende', legendX + legendWidth / 2, 40);

    const labelSpacing = 20;
    let yPosition = 60;

    if (configType === 'pie') {
      for (let i = 0; i < this.labels.length; i++) {
        const color = themeObj?.themeForChartPie[i];
        context.fillStyle = color;
        context.fillRect(legendX + 5, yPosition + 30, 10, 10);

        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(this.labels[i], legendX + 55, yPosition + 40);

        yPosition += labelSpacing;
      }
    } else {
      yPosition = 15;
      for (let i = 0; i < this.tag.length; i++) {
        context.fillStyle = themeObj?.fillColor[i];
        context.fillRect(legendX + 2, yPosition + 30, 10, 10);
        context.fillStyle = 'black';
        context.font = `14px ${themeObj?.font}`;
        context.fillText(this.tag[i], legendX + 55, yPosition + 40);
        yPosition += 20;
      }
    }
  }
}

export default Legend;
