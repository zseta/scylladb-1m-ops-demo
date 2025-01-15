import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.scss';
import { App } from './App';

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
