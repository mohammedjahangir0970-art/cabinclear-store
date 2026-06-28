import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// CabinClear UK Store - Deployed via Cloudflare Pages
// Trigger deployment: refresh token
// This comment ensures the build triggers

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
