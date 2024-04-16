import './App.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <>
      <Canvas
       
        lineColor='red'
        width={300}
        height={200} 
        backround= 'rgba(255, 0, 0, 0.2)'
         /> 
    </>
  );
}

export default App;
