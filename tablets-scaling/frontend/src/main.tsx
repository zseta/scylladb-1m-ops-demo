import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error('No root element found');
} else {
  createRoot(rootDiv).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
