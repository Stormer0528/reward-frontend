import { lazy, Suspense } from 'react';
import { Outlet, Navigate, type RouteObject } from 'react-router';

import Container from '@mui/material/Container';

import { MainLayout } from 'src/layouts/main';
import { NavBasic } from 'src/layouts/main/navItem/nav-basic';

import { LoadingScreen } from 'src/components/loading-screen';

import { paths } from '../paths';

// ----------------------------------------------------------------------
const IntroductionPage = lazy(() => import('src/pages/Introduction'));
const RapidRewardsPage = lazy(() => import('src/pages/RapidRewards'));
const StatisticsPage = lazy(() => import('src/pages/Statistics'));
const RewardDetailPage = lazy(() => import('src/pages/MemberStatistics/List'));
// ----------------------------------------------------------------------

export const statisticsRoutes: RouteObject[] = [
  {
    path: '',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Container>
          <NavBasic />
          <Outlet />
        </Container>
      </Suspense>
    ),
    children: [
      { index: true, element: <Navigate to={paths.pages.intro.root} replace /> },
      { path: 'intro', element: <IntroductionPage /> },
      { path: 'rapid-rewards', element: <RapidRewardsPage /> },
    ],
  },
  {
    path: 'statistics',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <StatisticsPage />
        </MainLayout>
      </Suspense>
    ),
  },
  {
    path: 'reward/:id',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <RewardDetailPage />
        </MainLayout>
      </Suspense>
    ),
  },
];
