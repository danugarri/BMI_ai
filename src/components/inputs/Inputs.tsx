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
        !validationError ? setInputs({ height: transformToCm(height), weight }) : null;
    };

    const transformToCm = (height: number) => {
        // we receibe a float, so if we receive 1.82 it is smaller than 3
        const meter = height < 3 ? height : null;
        if (meter) {
            return meter * 100;
        } else {
            return height;
        }
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
                    step="0.01"
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
                    step="0.01"
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
