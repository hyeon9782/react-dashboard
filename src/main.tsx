import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@/router/AppRouter.tsx';
import { worker } from '../src/mocks/browser';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
