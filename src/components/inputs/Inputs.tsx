import React, { FormEvent, useState } from 'react';
import './Inputs.css';
import { InputValidation } from '../inputValidation/InputValidation';

export type Inputs = {
    height: number;
    weight: number;
};
type InputsProps = {
    setInputs: (values: Inputs) => void;
    setValidationError: (value: boolean) => void;
    validationError: boolean;
};
export const Inputs: React.FC<InputsProps> = ({
    setInputs,
    setValidationError,
    validationError,
}) => {
    const [weight, setWeight] = useState<number>();
    const [height, setHeight] = useState<number>();

    const submitInputs = (e: FormEvent) => {
        e.preventDefault();
        !validationError ? setInputs({ height, weight }) : null;
    };

    return (
        <form onSubmit={submitInputs} className="form-container">
            <label htmlFor="height">Altura</label>
            <section className="inputs-container">
                <input
                    type="number"
                    name="height"
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    required
                    step="0.1"
                    min={'1'}
                />
                <InputValidation
                    inputs={{ height, weight }}
                    setValidationError={setValidationError}
                />
            </section>
            <label htmlFor="weight">Peso</label>
            <section className="inputs-container">
                <input
                    type="number"
                    min={'1'}
                    step="0.1"
                    name="weight"
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    required
                />
                <InputValidation
                    inputs={{ height, weight }}
                    setValidationError={setValidationError}
                />
            </section>

            <input
                type="submit"
                step="0.1"
                value="Consultar"
                className="submit-button"
                disabled={validationError}
            />
        </form>
    );
};
