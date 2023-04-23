import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Ai } from './components/ai/Ai';
import { Inputs } from './components/inputs/Inputs';
import { INeuralNetworkData } from 'brain.js/dist/neural-network';

const App = () => {
    const [inputs, setInputs] = useState<Inputs>();
    const [Bmi, setBmi] = useState<number>();
    const [result, setResult] = useState<INeuralNetworkData>();
    useEffect(() => {
        inputs ? setBmi(calculateBMI(inputs)) : null;
    }, [inputs]);

    const calculateBMI = (values: Inputs) =>
        values.weight / (((values.height / 100) * values.height) / 100);

    return (
        <>
            <Ai bmi={Bmi} setResult={setResult} />
            <Inputs setInputs={setInputs} />
            {Bmi}
            {result}
        </>
    );
};

createRoot(document.getElementById('root')).render(<App />);
