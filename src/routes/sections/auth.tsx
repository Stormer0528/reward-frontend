import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router';

import { AuthSplitLayout } from 'src/layouts/auth-split';

import { SplashScreen } from 'src/components/LoadingScreen';

import { GuestGuard } from 'src/auth/guard';

import { paths } from '../paths';

// ----------------------------------------------------------------------

const SignInPage = lazy(() => import('src/pages/SignIn'));
const VerifyResult = lazy(() => import('src/sections/SignUp/Info'));
const VerifyEmail = lazy(() => import('src/sections/SignUp/verify'));
const ResetPasswordPage = lazy(() => import('src/pages/ResetPassword/resetPassword'));
const UpdatePasswordPage = lazy(() => import('src/pages/ResetPassword/updatePassword'));
const ForgotPasswordPage = lazy(() => import('src/pages/ResetPassword/forgotPassword'));

export const authRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <GuestGuard>
          <AuthSplitLayout
            slotProps={{
              section: {
                title: 'Hi, Welcome to MineTXC',
                subtitle: 'TEXITcoin is the future of money in Texas.',
              },
            }}
          >
            <Outlet />
          </AuthSplitLayout>
        </GuestGuard>
      </Suspense>
    ),
    children: [
      { path: 'sign-up', element: <Navigate to={paths.pages.intro} replace /> },
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'verify-email', element: <VerifyEmail /> },
      { path: 'thanks', element: <VerifyResult /> },
      { path: 'update-password', element: <UpdatePasswordPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
    ],
  },
];
