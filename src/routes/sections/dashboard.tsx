import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router';

import { TeamReportSection } from 'src/__generated__/graphql';
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
const ProfileWrapper = lazy(() => import('src/pages/Profile/Wrapper'));
const ProfileHistoryPage = lazy(() => import('src/pages/Profile/ProfileHistory'));
const ProfileEditPage = lazy(() => import('src/pages/Profile/ProfileEdit'));
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const RewardWrapper = lazy(() => import('src/pages/Reward/Wrapper'));
const RewardDailyPage = lazy(() => import('src/pages/Reward/Daily'));
const RewardWalletsPage = lazy(() => import('src/pages/Reward/Wallets'));
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
const TeamWrapper = lazy(() => import('src/pages/TeamCommission/Wrapper'));
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
const SponsorshipListPage = lazy(() => import('src/pages/Sponsorship/SponsorshipList'));
const SponsorshipTreePage = lazy(() => import('src/pages/Sponsorship/SponsorshipTree'));
const SponsorshipCreatePage = lazy(() => import('src/pages/Sponsorship/SponsorshipCreate'));
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
      { path: 'overview', element: <OverviewPage /> },
      { path: 'orders', element: <SaleListPage /> },
      {
        path: 'sponsorships',
        children: [
          {
            element: (
              <SponsorshipWrapper>
                <Outlet />
              </SponsorshipWrapper>
            ),
            children: [
              { index: true, element: <Navigate to="approved" replace /> },
              { path: 'approved', element: <SponsorshipListPage allowState="APPROVED" /> },
              { path: 'pending', element: <SponsorshipListPage allowState="PENDING" /> },
              { path: 'added', element: <SponsorshipListPage allowState="ADDED" /> },
              { path: 'graveyard', element: <SponsorshipListPage allowState="GRAVEYARD" /> },
              { path: 'tree', element: <SponsorshipTreePage /> },
            ],
          },
          { path: 'new', element: <SponsorshipCreatePage /> },
        ],
      },
      {
        path: 'reward',
        children: [
          {
            element: (
              <RewardWrapper>
                <Outlet />
              </RewardWrapper>
            ),
            children: [
              { index: true, element: <Navigate to="daily" replace /> },
              { path: 'daily', element: <RewardDailyPage /> },
              { path: 'wallets', element: <RewardWalletsPage /> },
            ],
          },
        ],
      },
      { path: 'placement', element: <PlacementListPage /> },
      { path: 'commission', element: <CommissionListPage /> },
      {
        path: 'resource',
        children: [
          { index: true, element: <ResourcePage /> },
          { path: ':slug', children: [{ index: true, element: <ResourceDetailPage /> }] },
        ],
      },
      {
        path: 'profile',
        element: (
          <ProfileWrapper>
            <Outlet />
          </ProfileWrapper>
        ),
        children: [
          { index: true, element: <Navigate to="history" replace /> },
          { path: 'history', element: <ProfileHistoryPage /> },
          { path: 'edit', element: <ProfileEditPage /> },
          // TODO: security page
        ],
      },
      {
        path: 'notifications',
        element: (
          <AuthGuard>
            <Suspense fallback={<LoadingScreen />}>
              <NotificationListPage />
            </Suspense>
          </AuthGuard>
        ),
      },
      { path: 'invoices', element: <InvoiceListPage /> },
      {
        path: 'team',
        children: [
          {
            element: (
              <TeamWrapper>
                <Outlet />
              </TeamWrapper>
            ),
            children: [
              { index: true, element: <Navigate to="left" replace /> },
              {
                path: 'left',
                element: <TeamCommissionListPage teamReport={TeamReportSection.Left} />,
              },
              {
                path: 'right',
                element: <TeamCommissionListPage teamReport={TeamReportSection.Right} />,
              },
              {
                path: 'referral',
                element: <TeamCommissionListPage teamReport={TeamReportSection.Referral} />,
              },
              {
                path: 'contact',
                element: <TeamCommissionListPage isContact />,
              },
            ],
          },
        ],
      },
      { path: 'mail', element: <MailPage /> },
      { path: 'communication', element: <CommunicationPage /> },
      {
        path: 'calculator',
        element: (
          <AuthGuard>
            <Suspense fallback={<LoadingScreen />}>
              <CalculatorPage />
            </Suspense>
          </AuthGuard>
        ),
      },
    ],
  },
];
