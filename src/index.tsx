import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Ai } from './ai/Ai';

const App = () => {
    return <Ai />;
};

createRoot(document.getElementById('root')).render(<App />);
