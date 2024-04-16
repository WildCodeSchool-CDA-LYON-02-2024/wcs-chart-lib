import React, { useEffect, useRef } from 'react';
import Point from '../services/Point';
import CanvasConfig from '../services/Canvas';


// eslint-disable-next-line react/prop-types
const Canvas = ({ lineColor, textType, lineType, width, height,backround }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasCfg = new CanvasConfig(canvasRef);
    const twoPoint = new Point();

   
    canvasCfg.canvas.width = width || 300;
    canvasCfg.canvas.height = height || 150;


   
    
  

    // Clear canvas
    canvasCfg.context.clearRect(0, 0, canvasCfg.canvas.width, canvasCfg.canvas.height); 
    canvasCfg.context.fillStyle = backround
    canvasCfg.context.fillRect(0, 0, canvasCfg.canvas.width, canvasCfg.canvas.height);
    console.log(backround);
   

    // Draw lines
    twoPoint.drawLine(
      canvasCfg.context,
      0,
      canvasCfg.canvas.height,
      canvasCfg.canvas.width,
      canvasCfg.canvas.height,
      lineColor || 'yellow'
    );

    twoPoint.drawLine(
      canvasCfg.context,
      0,
      0,
      0,
      canvasCfg.canvas.height,
      lineColor || 'red'
    );

    // Set font
    canvasCfg.context.font = textType || 'normal 16px Arial';

    // Add more drawing operations as needed

  }, [lineColor, textType, lineType, width, height]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
