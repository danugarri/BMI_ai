import React, { useEffect } from 'react';
import './InputValidation.css';

export const InputValidation: React.FC<{
    inputs: { height: number; weight: number };
    setValidationError: (value: boolean) => void;
}> = ({ inputs, setValidationError }) => {
    const errorMessage = inputs.height < 0 || inputs.weight < 0 ? 'Introduce dato válido' : null;
    useEffect(() => {
        inputs.height < 0 || inputs.weight < 0
            ? setValidationError(true)
            : setValidationError(false);
    }, [errorMessage, inputs]);

    return <>{errorMessage && <span className="validation-error">{errorMessage}</span>}</>;
};
