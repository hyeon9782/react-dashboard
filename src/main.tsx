import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@/router/AppRouter.tsx';
import { worker } from '../src/mocks/browser';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const quetyClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={quetyClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
