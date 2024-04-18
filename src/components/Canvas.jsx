import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CanvasConfig from "../services/Canvas";
import Point from "../services/Point";
import Legend from "../services/Legend";
import selectChart from "../services/charts/selectChart";
import initAxies from "../services/initAxies";

const Canvas = ({ config, legend }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasCfg = new CanvasConfig(canvasRef, config.height, config.width);
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

    const handleResize = () => {
      const { current: canvas } = canvasRef;
      canvasCfg.updateCanvas(canvas, config.height, config.width);
      initAxies(canvasCfg, config);
      selectChart(config, canvasCfg);
    };

    drawContent();
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [config, legend]);

  return <canvas ref={canvasRef} />;
};

Canvas.propTypes = {
  config: PropTypes.object.isRequired,
  legend: PropTypes.oneOf(["inline", "blockLeft", "blockRight", "none"]),
};

export default Canvas;
