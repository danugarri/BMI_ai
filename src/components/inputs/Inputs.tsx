import React, { FormEvent, useState } from 'react';
import './Inputs.css';

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
        <form onSubmit={submitInputs} className="form-container">
            <label htmlFor="height">Altura</label>
            <input
                type="number"
                name="height"
                onChange={(e) => setHeight(parseInt(e.target.value))}
                required
            />
            <label htmlFor="weight">Peso</label>
            <input
                type="number"
                name="weight"
                onChange={(e) => setWeight(parseInt(e.target.value))}
                required
            />

            <input type="submit" value="Consultar" className="submit-button" />
        </form>
    );
};
