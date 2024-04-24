import Canvas from "./Canvas";
import PropTypes from "prop-types";

function TestCanvas({ config, dataset }) {
  return (
    <div>
      <h2>Canvas avec légende en ligne :</h2>
      <Canvas
        config={config}
        dataset={dataset}
        legend="inline"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas avec légende à gauche :</h2>
      <Canvas
        config={config}
        dataset={dataset}
        legend="blockLeft"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas avec légende à droite :</h2>
      <Canvas
        dataset={dataset}
        config={config}
        legend="blockRight"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas sans légende :</h2>
      <Canvas
        config={config}
        dataset={dataset}
        legend="none"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />
    </div>
  );
}

TestCanvas.propTypes = {
  config: PropTypes.object.isRequired,
  dataset: PropTypes.object,
};

export default TestCanvas;
