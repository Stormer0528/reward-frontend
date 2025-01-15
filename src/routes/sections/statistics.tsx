import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';

import { MainLayout } from 'src/layouts/main';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------
const IntroductionPage = lazy(() => import('src/pages/Introduction'));
const RewardDetailPage = lazy(() => import('src/pages/MemberStatistics/List'));
// ----------------------------------------------------------------------

export const statisticsRoutes: RouteObject[] = [
  {
    path: 'intro',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <IntroductionPage />
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
