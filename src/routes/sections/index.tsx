import { Navigate, useRoutes } from 'react-router-dom';

import { CONFIG } from 'src/config';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { statisticsRoutes } from './pages';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={CONFIG.redirectPath} replace />,
    },

    // First Page
    ...statisticsRoutes,

    // Auth
    ...authRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
