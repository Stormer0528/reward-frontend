import { lazy, Suspense } from 'react';
import { Outlet, Navigate, type RouteObject } from 'react-router';

import { MainLayout } from 'src/layouts/main';
import { AuthCenteredLayout } from 'src/layouts/auth-centered';

import { LoadingScreen } from 'src/components/LoadingScreen';

import { JoinNowButton } from 'src/sections/Introduction/components/JoinNowButton';

import { paths } from '../paths';

// ----------------------------------------------------------------------
const OrderPage = lazy(() => import('src/pages/Order'));
const ContactPage = lazy(() => import('src/pages/Contact'));
const StatisticsPage = lazy(() => import('src/pages/Statistics'));
const ActionPage = lazy(() => import('src/pages/Commission/Action'));
const IntroductionPage = lazy(() => import('src/pages/Introduction'));
const RapidRewardsPage = lazy(() => import('src/pages/RapidRewards'));
const SilverGuaranteePage = lazy(() => import('src/pages/SilverGuarantee'));
const RewardDetailPage = lazy(() => import('src/pages/MemberStatistics/List'));
// ----------------------------------------------------------------------

export const mainRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout
          slotProps={{
            header: {
              position: 'relative',
              disableElevation: true,
              slots: { rightArea: <JoinNowButton sx={{ml: 2}}/> },
            },
          }}
        >
          <Outlet />
        </MainLayout>
      </Suspense>
    ),
    children: [
      { index: true, element: <Navigate to={paths.pages.intro} replace /> },
      { path: 'intro', element: <IntroductionPage /> },
      { path: 'rapid-rewards', element: <RapidRewardsPage /> },
      { path: 'silver-bugs', element: <SilverGuaranteePage /> },
      { path: 'contact', element: <ContactPage /> },
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
  {
    path: `${paths.dashboard.commission.action}`,
    element: (
      <Suspense>
        <ActionPage />
      </Suspense>
    ),
  },
  {
    path: `${paths.pages.order.root}/:id`,
    element: (
      <AuthCenteredLayout>
        <OrderPage />
      </AuthCenteredLayout>
    ),
  },
];
