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
}

export default Point;
