import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

import { paths } from '../paths';

// ----------------------------------------------------------------------
const SaleListPage = lazy(() => import('src/pages/Sale/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const DashboardPage = lazy(() => import('src/pages/Dashboard'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ProfilePage = lazy(() => import('src/pages/Profile'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const RewardPage = lazy(() => import('src/pages/Reward/List'));
const StatisticsDetailPage = lazy(() => import('src/pages/Reward/Statistics/Detail'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ResourcePage = lazy(() => import('src/pages/Resource/List'));
const ResourceDetailPage = lazy(() => import('src/pages/Resource/Detail'));
// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <Navigate to={paths.dashboard.history.root} replace />, index: true },
      {
        path: 'dashboard',
        children: [{ index: true, element: <DashboardPage /> }],
      },
      {
        path: 'sales',
        children: [{ index: true, element: <SaleListPage /> }],
      },
      {
        path: 'reward',
        children: [
          { index: true, element: <RewardPage /> },
          {
            path: 'statistics',
            children: [{ path: ':id', element: <StatisticsDetailPage /> }],
          },
        ],
      },
      {
        path: 'resource',
        children: [
          { index: true, element: <ResourcePage /> },
          { path: ':slug', children: [{ index: true, element: <ResourceDetailPage /> }] },
        ],
      },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
];
