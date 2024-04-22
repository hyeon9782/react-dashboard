import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '@/pages/NotFoundPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import JobStatusPage from '../pages/job/status';
import JobPlanningPage from '../pages/job/planning';
import SearchedProteinResultPage from '../pages/searched/protein';
import SearchedGlycoproteinResultPage from '../pages/searched/glycoprotein';
import StatisticsProteinResultPage from '../pages/statistics/protein';
import StatisticsGlycoproteinResultPage from '../pages/statistics/glycoprotein';
import NetworkProteinResultPage from '../pages/network/protein';
import NetworkGlycoproteinResultPage from '../pages/network/glycoprotein';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          ),
          action: async ({ params, request }) => {
            return new Promise((resolve) => {
              return setTimeout(() => {
                resolve('success');
              }, 1000);
            });
          },
        },
        {
          path: '/login',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: '/job/job-status',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <JobStatusPage />
            </Suspense>
          ),
        },
        {
          path: '/job/job-planning',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <JobPlanningPage />
            </Suspense>
          ),
        },
        {
          path: '/searched/protein-result',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <SearchedProteinResultPage />
            </Suspense>
          ),
        },
        {
          path: '/searched/glycoprotein-result',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <SearchedGlycoproteinResultPage />
            </Suspense>
          ),
        },
        {
          path: '/statistics/protein-result',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <StatisticsProteinResultPage />
            </Suspense>
          ),
        },
        {
          path: '/statistics/glycoprotein-result',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <StatisticsGlycoproteinResultPage />
            </Suspense>
          ),
        },
        {
          path: '/network/protein-result',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <NetworkProteinResultPage />
            </Suspense>
          ),
        },
        {
          path: '/network/glycoprotein-result',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <NetworkGlycoproteinResultPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
