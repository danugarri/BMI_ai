import React from 'react';
import './InputValidation.css';

export const InputValidation: React.FC<{ input: number }> = ({ input }) => {
    const errorMessage = input < 0 ? 'Introduce dato válido' : null;

    return <>{errorMessage && <span className="validation-error">{errorMessage}</span>}</>;
};
