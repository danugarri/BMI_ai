import { INeuralNetworkData } from 'brain.js/dist/neural-network';
import React from 'react';
import { fatties, fit, skinnies } from '../../assets/';
import './ResultViewer.css';

export const ResultViewer: React.FC<{ bmi: number; result: INeuralNetworkData }> = ({
    bmi,
    result,
}) => {
    const body =
        !!result && result.toString() === 'fit'
            ? fit
            : !!result && result.toString() === 'fat'
            ? fatties
            : skinnies;
    const text =
        !!result && result.toString() === 'fit'
            ? 'Fit'
            : !!result && result.toString() === 'fat'
            ? 'Sobrepeso'
            : 'Bajo peso';
    return (
        <>
            {result && (
                <div className="result-container">
                    <>
                        <p>Índice de masa corporal: {bmi}</p>
                        <p className="body-text">{text}</p>
                        <img alt="bodies" src={body} />
                    </>
                </div>
            )}
        </>
    );
};
