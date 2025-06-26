import { lazy, Suspense } from 'react';
import { Outlet, Navigate, type RouteObject } from 'react-router';

import { Skeleton } from '@mui/material';

import { MainLayout } from 'src/layouts/main';
import OrderWrapper from 'src/pages/Order/Wrapper';
import { AuthCenteredLayout } from 'src/layouts/auth-centered';
import { OrderProvider } from 'src/libs/Order/Context/OrderProvider';

import { LoadingScreen } from 'src/components/LoadingScreen';

import { paths } from '../paths';

// ----------------------------------------------------------------------
const PaymentStatus = lazy(() => import('src/pages/Order/PaymentStatus'));
const PaymentWaiting = lazy(() => import('src/pages/Order/PaymentWaiting'));
const PaymentSelector = lazy(() => import('src/pages/Order/PaymentSelector'));
const ContactPage = lazy(() => import('src/pages/Contact'));
const StatisticsPage = lazy(() => import('src/pages/Statistics'));
const ActionPage = lazy(() => import('src/pages/Commission/Action'));
const IntroductionPage = lazy(() => import('src/pages/Introduction'));
const RapidRewardsPage = lazy(() => import('src/pages/RapidRewards'));
const SilverGuaranteePage = lazy(() => import('src/pages/SilverGuarantee'));
// const RewardDetailPage = lazy(() => import('src/pages/MemberStatistics/List'));

// Error
const Page403 = lazy(() => import('src/pages/error/403'));
const Page404 = lazy(() => import('src/pages/error/404'));
const MaintenancePage = lazy(() => import('src/pages/Maintenance'));

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
              slotProps: { logo: { sx: { width: { md: 70 }, height: { md: 70 } } } },
            },
          }}
          cssVars={{ '--layout-header-desktop-height': '100px' }}
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
        <MainLayout
          slotProps={{
            header: {
              slotProps: { container: { maxWidth: 'xl' } },
            },
          }}
        >
          <StatisticsPage />
        </MainLayout>
      </Suspense>
    ),
  },
  // {
  //   path: 'reward/:id',
  //   element: (
  //     <Suspense fallback={<LoadingScreen />}>
  //       <MainLayout>
  //         <RewardDetailPage />
  //       </MainLayout>
  //     </Suspense>
  //   ),
  // },
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
    children: [
      {
        element: (
          <AuthCenteredLayout>
            <Suspense fallback={<Skeleton />}>
              <OrderProvider>
                <OrderWrapper>
                  <Outlet />
                </OrderWrapper>
              </OrderProvider>
            </Suspense>
          </AuthCenteredLayout>
        ),
        children: [
          { index: true, element: <PaymentSelector /> },
          { path: 'waiting', element: <PaymentWaiting /> },
          { path: 'status', element: <PaymentStatus /> },
        ],
      },
    ],
  },
  { path: '403', element: <Page403 /> },
  { path: '404', element: <Page404 /> },
  {
    path: 'maintenance',
    element: <MaintenancePage />,
  },
];
