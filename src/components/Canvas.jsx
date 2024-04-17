import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import CanvasConfig from "../services/Canvas";
import selectChart from "../services/charts/selectChart";
import initAxies from "../services/initAxies";

const Canvas = ({ config }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasCfg = new CanvasConfig(canvasRef, config.height, config.width);
    initAxies(canvasCfg, config);
    selectChart(config, canvasCfg);
  }, [config]);

  useEffect(() => {
    const handleResize = () => {
      const { current: canvas } = canvasRef;
      const canvasCfg = new CanvasConfig(
        canvasRef,
        window.innerHeight / 2,
        window.innerWidth
      );
      canvas.width = canvasCfg.canvas.width;
      canvas.height = canvasCfg.canvas.height;
      initAxies(canvasCfg, config);
      selectChart(config, canvasCfg);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [config]);

  return <canvas ref={canvasRef} />;
};

Canvas.propTypes = {
  config: PropTypes.object,
};

export default Canvas;
