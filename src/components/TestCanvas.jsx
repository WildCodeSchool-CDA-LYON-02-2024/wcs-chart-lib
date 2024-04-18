import Canvas from "./Canvas";
import PropTypes from "prop-types";

function TestCanvas({ config }) {
  return (
    <div>
      <h2>Canvas avec légende en ligne :</h2>
      <Canvas
        config={config}
        legend="inline"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas avec légende à gauche :</h2>
      <Canvas
        config={config}
        legend="blockLeft"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas avec légende à droite :</h2>
      <Canvas
        config={config}
        legend="blockRight"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas sans légende :</h2>
      <Canvas
        config={config}
        legend="none"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />
    </div>
  );
}

TestCanvas.propTypes = {
  config: PropTypes.object.isRequired,
};

export default TestCanvas;
