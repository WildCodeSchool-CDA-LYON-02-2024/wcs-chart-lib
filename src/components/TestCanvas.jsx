import Canvas from './Canvas';

function TestCanvas() {
    return (
        <div>
            <h2>Canvas avec légende en ligne :</h2>
            <Canvas legend="inline" style={{ border: '1px solid black', marginBottom: '20px' }} />

            <h2>Canvas avec légende à gauche :</h2>
            <Canvas legend="blockLeft" style={{ border: '1px solid black', marginBottom: '20px' }} />

            <h2>Canvas avec légende à droite :</h2>
            <Canvas legend="blockRight" style={{ border: '1px solid black', marginBottom: '20px' }} />

            <h2>Canvas sans légende :</h2>
            <Canvas legend="none" style={{ border: '1px solid black', marginBottom: '20px' }} />
        </div>
    );
}

export default TestCanvas;
