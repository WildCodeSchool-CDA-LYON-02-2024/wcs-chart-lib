import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CanvasConfig from '../services/Canvas';
import Legend from '../services/Legend';
import selectChart from '../services/charts/selectChart';
import initAxies from '../services/initAxies';
import Theme from '../services/Theme';

const WCS = ({ config, legend, dataset, theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const legendService = new Legend(dataset);
    const themeObj = new Theme(theme);
    themeObj.selectedTheme(theme);

    const handleResize = () => {
      const canvasCfg = new CanvasConfig(
        canvasRef,
        config.height,
        config.width,
        themeObj.backGroundColor
      );

      const drawContent = () => {
        if (legend) {
          legendService.drawLegend(
            canvasCfg.context,
            legend,
            canvasCfg.canvas,
            canvasCfg.spacing,
            config.type,
            themeObj
          );
        }
      };

      drawContent();
      if (config.type !== 'pie') {
        initAxies(canvasCfg, config, themeObj);
      }

      selectChart(config, canvasCfg, dataset, themeObj);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [config, dataset, legend]);

  return <canvas ref={canvasRef} />;
};

WCS.propTypes = {
  dataset: PropTypes.array,
  config: PropTypes.object.isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  legend: PropTypes.oneOf(['bottom', 'left', 'right', 'none', 'top']),
};

export default WCS;
