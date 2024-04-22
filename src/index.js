import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
/* eslint-disable react/jsx-filename-extension */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
