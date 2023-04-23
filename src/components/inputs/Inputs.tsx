import React, { FormEvent, useState } from 'react';
import './Inputs.css';
import { InputValidation } from '../inputValidation/InputValidation';

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
            <section className="inputs-container">
                <input
                    type="number"
                    name="height"
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    required
                />
                <InputValidation input={height} />
            </section>
            <label htmlFor="weight">Peso</label>
            <section className="inputs-container">
                <input
                    type="number"
                    name="weight"
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    required
                />
                <InputValidation input={weight} />
            </section>

            <input type="submit" value="Consultar" className="submit-button" />
        </form>
    );
};
