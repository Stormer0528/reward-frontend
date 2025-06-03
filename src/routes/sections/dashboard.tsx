import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router';

import { DashboardLayout, DashboardContent } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/LoadingScreen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------
const OverviewPage = lazy(() => import('src/pages/Overview'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const SaleListPage = lazy(() => import('src/pages/Sale/List'));
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

// ----------------------------------------------------------------------
const PlacementListPage = lazy(() => import('src/pages/Placement/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const CommissionListPage = lazy(() => import('src/pages/Commission/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const TeamCommissionListPage = lazy(() => import('src/pages/TeamCommission'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const MailPage = lazy(() => import('src/pages/Mail'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const CommunicationPage = lazy(() => import('src/pages/Communication'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const SponsorshipWrapper = lazy(() => import('src/pages/Sponsorship/Wrapper'));
const SponsorshipPage = lazy(() => import('src/pages/Sponsorship/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const NotificationListPage = lazy(() => import('src/pages/Notification/List'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const CalculatorPage = lazy(() => import('src/pages/Calculator'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const InvoiceListPage = lazy(() => import('src/pages/Invoice/List'));
// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <DashboardContent maxWidth="xl">
              <Outlet />
            </DashboardContent>
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: 'overview',
        children: [{ index: true, element: <OverviewPage /> }],
      },
      {
        path: 'orders',
        children: [{ index: true, element: <SaleListPage /> }],
      },
      {
        path: 'sponsorships',
        element: (
          <SponsorshipWrapper>
            <Outlet />
          </SponsorshipWrapper>
        ),
        children: [
          { index: true, element: <Navigate to="approved" replace /> },
          { path: 'approved', element: <SponsorshipPage allowState='approved'/> },
          { path: 'pending', element: <SponsorshipPage allowState='pending' /> },
          { path: 'added', element: <SponsorshipPage allowState='added' /> },
          { path: 'graveyard', element: <SponsorshipPage allowState='graveyard' /> },
          { path: 'tree', element: <div>Tree</div> },
        ],
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
        path: 'placement',
        children: [{ index: true, element: <PlacementListPage /> }],
      },
      {
        path: 'commission',
        children: [{ index: true, element: <CommissionListPage /> }],
      },
      {
        path: 'resource',
        children: [
          { index: true, element: <ResourcePage /> },
          { path: ':slug', children: [{ index: true, element: <ResourceDetailPage /> }] },
        ],
      },
      { path: 'profile', element: <ProfilePage /> },
      {
        path: 'notifications',
        element: (
          <AuthGuard>
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </AuthGuard>
        ),
        children: [{ index: true, element: <NotificationListPage /> }],
      },
      {
        path: 'invoices',
        element: <InvoiceListPage />,
      },
      { path: 'team', element: <TeamCommissionListPage /> },
      { path: 'mail', element: <MailPage /> },
      { path: 'communication', element: <CommunicationPage /> },
      {
        path: 'calculator',
        element: (
          <AuthGuard>
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </AuthGuard>
        ),
        children: [{ index: true, element: <CalculatorPage /> }],
      },
    ],
  },
];
