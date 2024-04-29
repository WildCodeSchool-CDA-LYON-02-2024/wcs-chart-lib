class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // function who draw a line with two points
  drawLine(context, startX, startY, endX, endY, color = 'black') {
    // Color line
    context.strokeStyle = color;

    // Start path
    context.beginPath();

    // Coordinate x and y of first point
    context.moveTo(startX, startY);

    // Coordinate x and y of second point
    context.lineTo(endX, endY);

    // Close path with first point and second point
    context.closePath();

    // Draw line
    context.stroke();
  }

  drawLoop(
    data,
    context,
    startX,
    startY,
    columnPoint,
    ratioW,
    scaleH,
    limitMinValue,
    color = 'red'
  ) {
    // Color line
    context.strokeStyle = color;

    // Start path
    context.beginPath();

    // Coordinate x and y of first point
    context.moveTo(startX, startY - (data[0] - limitMinValue) * scaleH);
    //Loop for next point
    for (let i = 0; i < data.length; i++) {
      // Coordinate x and y of next
      context.lineTo(columnPoint, startY - (data[i] - limitMinValue) * scaleH);
      columnPoint += ratioW;
    }
    // Draw line
    context.stroke();
    context.closePath();
  }

  drawText(context, value, x, y) {
    context.font = '15px serif';

    context.fillText(value, x, y);
  }

  drawPie(data, context, colorList, startX, startY, radius) {
    let total = 0;
    let lastEnd = 0;
    let offset = Math.PI / 2;
    for (let j = 0; j < data.length; j++) {
      total += data[j];
    }
    for (let i = 0; i < data.length; i++) {
      context.fillStyle = colorList[i];
      let value = data[i];
      let arcSector = Math.PI * ((2 * value) / total);

      context.beginPath();
      context.moveTo(startX, startY);
      context.arc(
        startX,
        startY,
        radius,
        lastEnd - offset,
        lastEnd + arcSector - offset
      );
      context.fill();
      context.closePath();

      lastEnd += arcSector;
    }
  }
}

export default Point;
