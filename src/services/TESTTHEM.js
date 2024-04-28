import Canvas from "../components/Canvas";







const Theme  = ({ theme }) => {
    // eslint-disable-next-line react/prop-types
    const { fillColor, strokeColor } = theme;
  
    return (
      <div
        className="wild-chart"
        style={{
          backgroundColor: fillColor,
          borderColor: strokeColor,
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      >
        {/* Render chart components based on theme */}
      </div>
    );
  };
  
  // Example theme
  const coco = {
    type: 'point',
    toLine: true,
    grid: true,
    radius: 5,
    fillColor: 'blue',
    strokeColor: 'red',
  };
  
  export default function App() {
    return (
      <div className="App">
        <Theme theme={coco} />
      </div>
    );
  }
  