import { INeuralNetworkData } from 'brain.js/dist/neural-network';
import React from 'react';
import { fatties, fit, skinnies } from '../../assets/';

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
    return (
        <>
            {result && (
                <div>
                    <>
                        <p>Índice de masa corporal: {bmi}</p>
                        {result}
                        <img alt="bodies" src={body} />
                    </>
                </div>
            )}
        </>
    );
};
