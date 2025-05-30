import type { RouteObject } from 'react-router';

import { lazy } from 'react';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';

const Page404 = lazy(() => import('src/pages/error/404'));
// ----------------------------------------------------------------------

export const routesSection: RouteObject[] = [
  // Main
  ...mainRoutes,

  // Auth
  ...authRoutes,

  // Dashboard
  ...dashboardRoutes,

  // No match
  { path: '*', element: <Page404 />  },
];
