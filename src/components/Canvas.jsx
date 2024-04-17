import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CanvasConfig from "../services/Canvas";
import Point from "../services/Point";
import Legend from "../services/Legend";

const Canvas = ({ legend, ...props }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasCfg = new CanvasConfig(canvasRef);
    const legendService = new Legend();

    const drawContent = () => {
      const twoPoint = new Point();
      const { context, canvas } = canvasCfg;

      context.clearRect(0, 0, canvas.width, canvas.height);

      twoPoint.drawLine(context, 0, canvas.height, canvas.width, canvas.height);
      twoPoint.drawLine(context, 0, 0, 0, canvas.height);

      if (legend) {
        legendService.drawLegend(context, legend, canvas);
      }
    };

    drawContent();
  }, [legend]);

  return <canvas ref={canvasRef} {...props} />;
};

Canvas.propTypes = {
  legend: PropTypes.oneOf(["inline", "blockLeft", "blockRight", "none"]),
};

export default Canvas;
