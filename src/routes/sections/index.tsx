import type { RouteObject } from 'react-router';

import { Navigate } from 'react-router';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export const routesSection: RouteObject[] = [
  // Main
  ...mainRoutes,

  // Auth
  ...authRoutes,

  // Dashboard
  ...dashboardRoutes,

  // No match
  { path: '*', element: <Navigate to="/404" replace /> },
];
