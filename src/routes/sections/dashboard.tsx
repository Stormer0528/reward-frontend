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
const CommunicationPage = lazy(() => import('src/pages/Communication'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const TXCRequestPage = lazy(() => import('src/pages/TXCRequest/List'));
const TXCRequestCreatePage = lazy(() => import('src/pages/TXCRequest/Create'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const ReimbursementListPage = lazy(() => import('src/pages/Reimbursement/List'));
const ReimbursementCreatePage = lazy(() => import('src/pages/Reimbursement/Create'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const SponsorListPage = lazy(() => import('src/pages/Sponsor/List'));
const SponsorWrapper = lazy(() => import('src/pages/Sponsor'));
const SponsorTreePage = lazy(() => import('src/pages/Sponsor/Tree'));
const SponsorNewPage = lazy(() => import('src/pages/Sponsor/New'));
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
        path: 'sponsorships',
        children: [
          {
            element: (
              <SponsorWrapper>
                <Outlet />
              </SponsorWrapper>
            ),
            children: [
              { index: true, element: <Navigate to="approved" replace /> },
              { path: 'approved', element: <SponsorListPage allowState="APPROVED" /> },
              { path: 'pending', element: <SponsorListPage allowState="PENDING" /> },
              { path: 'added', element: <SponsorListPage allowState="ADDED" /> },
              { path: 'graveyard', element: <SponsorListPage allowState="GRAVEYARD" /> },
              { path: 'tree', element: <SponsorTreePage /> },
              { path: 'new', element: <SponsorNewPage /> },
            ],
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
      { path: 'my-account', element: <ProfilePage /> },
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
      { path: 'communication', element: <CommunicationPage /> },
      {
        path: 'txc-request',
        children: [
          { index: true, element: <TXCRequestPage /> },
          { path: 'new', element: <TXCRequestCreatePage /> },
        ],
      },
      {
        path: 'reimbursement',
        children: [
          { index: true, element: <ReimbursementListPage /> },
          { path: 'new', element: <ReimbursementCreatePage /> },
        ],
      },
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
