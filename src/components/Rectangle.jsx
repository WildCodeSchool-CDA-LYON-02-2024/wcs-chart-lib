/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";

function Rectangle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // dessiner le titre
    const drawTitle = (context, x, y, text) => {
      context.font = "20px Arial";
      context.fillStyle = "black";
      context.textAlign = "center";
      context.fillText(text, x, y);
    };

    // dessiner l'axe X
    const drawXAxis = (context, width, height) => {
      context.beginPath();
      context.moveTo(50, height - 50);
      context.lineTo(width - 50, height - 50);
      context.stroke();
      drawArrow(context, width - 50, height - 50, "x");
    };

    // dessiner l'axe Y
    const drawYAxis = (context, height) => {
      context.beginPath();
      context.moveTo(50, height - 50);
      context.lineTo(50, 50);
      context.stroke();
      drawArrow(context, 50, 50, "y");
    };

    //dessiner une flèche
    const drawArrow = (context, x, y, direction) => {
      context.beginPath();
      if (direction === "x") {
        context.moveTo(x - 10, y - 10);
        context.lineTo(x, y);
        context.lineTo(x - 10, y + 10);
      } else if (direction === "y") {
        context.moveTo(x - 10, y + 10);
        context.lineTo(x, y);
        context.lineTo(x + 10, y + 10);
      }
      context.stroke();
    };

    // dessiner un cercle
    const drawCircle = (context, x, y, radius, color) => {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fillStyle = color;
      context.fill();
      console.log(radius);

    };
    // dssiner le titre
    drawTitle(context, canvas.width / 2, 30, "Titre du graphe");

    // Dessiner l'axe X
    drawXAxis(context, canvas.width, canvas.height);

    // Dessiner l'axe Y
    drawYAxis(context, canvas.height);

    // Dessiner le cercle bleu
    drawCircle(context, canvas.width / 2, canvas.height / 2, 50, "blue");
  }, []);

  return (
    <div id="container-canvas-wcs">
      <canvas id="canvas-wcs" ref={canvasRef} width={200} height={200} />
    </div>
  );
}

export default Rectangle;
