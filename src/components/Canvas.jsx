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
      const currentWidth = canvasRef.current.offsetWidth;
      const currentHeight = canvasRef.current.offsetHeight;
      const originalWidth = config.width;
      const originalHeight = config.height;
      const widthDifference = Math.abs(originalWidth - currentWidth);
      const heightDifference = Math.abs(originalHeight - currentHeight);
      const widthChange = widthDifference / originalWidth >= 0.1;
      const heightChange = heightDifference / originalHeight >= 0.1;

      if (widthChange || heightChange) {
        const newConfig = {
          ...config,
          width: currentWidth,
          height: currentHeight,
        };
        const canvasCfg = new CanvasConfig(
          canvasRef,
          currentHeight,
          currentWidth
        );
        initAxies(canvasCfg, newConfig);
        selectChart(newConfig, canvasCfg);
      }
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
