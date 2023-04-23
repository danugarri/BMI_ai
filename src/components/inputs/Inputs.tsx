import React, { FormEvent, useState } from 'react';

export type Inputs = {
    height: number;
    weight: number;
};
export const Inputs: React.FC<{ setInputs: (values: Inputs) => void }> = ({ setInputs }) => {
    const [weight, setWeight] = useState<number>();
    const [height, setHeight] = useState<number>();

    const submitInputs = (e: FormEvent) => {
        e.preventDefault();
        setInputs({ height, weight });
    };

    return (
        <form onSubmit={submitInputs}>
            <label htmlFor="height">Altura</label>
            <input
                type="number"
                name="height"
                onChange={(e) => setHeight(parseInt(e.target.value))}
            />
            <label htmlFor="weight">Peso</label>
            <input
                type="number"
                name="weight"
                onChange={(e) => setWeight(parseInt(e.target.value))}
            />

            <input type="submit" value="Consultar" />
        </form>
    );
};
