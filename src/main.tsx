import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    const { worker } = await import('./mock/browser.ts');
    worker.start();
  })();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
