import { INeuralNetworkData } from 'brain.js/dist/neural-network';
import React from 'react';

export const ResultViewer: React.FC<{ bmi: number; result: INeuralNetworkData }> = ({
    bmi,
    result,
}) => {
    return (
        <>
            {result && (
                <div>
                    <>
                        <p>Índice de masa corporal: {bmi}</p>
                        {result}
                    </>
                </div>
            )}
        </>
    );
};
