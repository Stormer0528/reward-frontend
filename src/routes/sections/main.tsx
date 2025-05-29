import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { SplashScreen } from 'src/components/LoadingScreen';

// ----------------------------------------------------------------------

// Error
const Page404 = lazy(() => import('src/pages/error/404'));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [{ path: '404', element: <Page404 /> }],
  },
];
