import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Ai } from './components/ai/Ai';
import { Inputs } from './components/inputs/Inputs';
import { INeuralNetworkData } from 'brain.js/dist/neural-network';
import { ResultViewer } from './components/result/ResultViewer';

const App = () => {
    const [inputs, setInputs] = useState<Inputs>();
    const [validationError, setValidationError] = useState(false);
    // Body mass index
    const [Bmi, setBmi] = useState<number>();
    const [result, setResult] = useState<INeuralNetworkData>();
    const updateResult = (value: INeuralNetworkData) => setResult(value);

    useEffect(() => {
        inputs ? setBmi(calculateBMI(inputs)) : null;
    }, [inputs]);

    const calculateBMI = (values: Inputs) =>
        values.weight / (((values.height / 100) * values.height) / 100);

    return (
        <>
            <Ai bmi={Bmi} updateResult={updateResult} />
            <Inputs
                setInputs={setInputs}
                setValidationError={setValidationError}
                validationError={validationError}
            />
            <ResultViewer bmi={Bmi} result={result} />
        </>
    );
};

createRoot(document.getElementById('root')).render(<App />);
