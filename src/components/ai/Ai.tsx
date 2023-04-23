import React from 'react';
import { NeuralNetwork, likely } from 'brain.js';
import { INeuralNetworkDatum, INeuralNetworkData } from 'brain.js/dist/neural-network';

interface Person {
    input: number[];
    output: {
        [key: string]: number;
    };
}

export const Ai: React.FC<{ bmi: number; setResult: (value: INeuralNetworkData) => void }> = ({
    bmi,
    setResult,
}) => {
    const net = new NeuralNetwork();
    /* We have to use percentage to work between 0 and 1*/
    // The fattest could be 50, so we have to divide between 50

    // fit
    const fit1: Person = { input: [20 / 50], output: { fit: 1 } };
    const fit2: Person = { input: [22 / 50], output: { fit: 1 } };
    const fit3: Person = { input: [18 / 50], output: { fit: 1 } };

    // fat
    const fat1: Person = { input: [40 / 50], output: { fat: 1 } };
    const fat2: Person = { input: [30 / 50], output: { fat: 1 } };
    const fat3: Person = { input: [26 / 50], output: { fat: 1 } };

    // skinny
    const skinny1: Person = { input: [15 / 50], output: { skinny: 1 } };
    const skinny2: Person = { input: [17 / 50], output: { skinny: 1 } };
    const skinny3: Person = { input: [16 / 50], output: { skinny: 1 } };

    const data: Array<INeuralNetworkDatum<number[], { [key: string]: number }>> = [
        fit1,
        fit2,
        fit3,
        fat1,
        fat2,
        fat3,
        skinny1,
        skinny2,
        skinny3,
    ];
    // Train
    net.train(data);
    /* example
    const result = likely([22 / 50], net);
    console.log(result);
    */
    const result = likely([bmi / 50], net);
    setResult(result);
    // Display probability
    // const test = net.run([10 / 50]);
    // console.log(test);

    return (
        <div>
            <h1>Ai</h1>
        </div>
    );
};
