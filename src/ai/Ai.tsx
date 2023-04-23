import React from 'react';
import { NeuralNetwork, likely } from 'brain.js';
import { INeuralNetworkDatum } from 'brain.js/dist/neural-network';

interface Person {
    input: number[];
    output: {
        [key: string]: number;
    };
}

export const Ai = () => {
    const net = new NeuralNetwork();
    // fit
    const fit1: Person = { input: [20], output: { fit: 1 } };
    const fit2: Person = { input: [22], output: { fit: 1 } };
    const fit3: Person = { input: [18], output: { fit: 1 } };

    // fat
    const fat1: Person = { input: [40], output: { fat: 1 } };
    const fat2: Person = { input: [30], output: { fat: 1 } };
    const fat3: Person = { input: [26], output: { fat: 1 } };

    // skinny
    const skinny1: Person = { input: [15], output: { skinny: 1 } };
    const skinny2: Person = { input: [17], output: { skinny: 1 } };
    const skinny3: Person = { input: [16], output: { skinny: 1 } };

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

    net.train(data);
    let result = likely([30], net);
    result = likely([40], net);
    console.log(result);
    return (
        <div>
            <h1>Ai</h1>
        </div>
    );
};
