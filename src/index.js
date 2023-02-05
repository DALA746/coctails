import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CoctailProvider from './contexts/CoctailContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CoctailProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CoctailProvider>
);
