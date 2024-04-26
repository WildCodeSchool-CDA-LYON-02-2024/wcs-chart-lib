import WCS from "./WCS";
import PropTypes from "prop-types";

function TestCanvas({ config, dataset }) {
  console.log("testCanva dataset :", dataset);
  return (
    <div>
      <h2>Canvas avec légende en haut :</h2>
      <WCS
        config={config}
        dataset={dataset}
        legend="onTop"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />
      <h2>Canvas avec légende en ligne :</h2>
      <WCS
        config={config}
        dataset={dataset}
        legend="inline"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas avec légende à gauche :</h2>
      <WCS        config={config}
        dataset={dataset}
        legend="blockLeft"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas avec légende à droite :</h2>
      <WCS
        dataset={dataset}
        config={config}
        legend="blockRight"
        style={{ border: "1px solid black", marginBottom: "20px" }}
      />

      <h2>Canvas sans légende :</h2>
      <WCS
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
