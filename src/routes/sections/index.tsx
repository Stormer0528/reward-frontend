import type { RouteObject } from 'react-router';

import { Navigate } from 'react-router';

import { CONFIG } from 'src/config';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { statisticsRoutes } from './pages';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export const routesSection: RouteObject[] = [
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
];
