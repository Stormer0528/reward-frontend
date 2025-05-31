import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router';

import { AuthSplitLayout } from 'src/layouts/auth-split';
import { AuthCenteredLayout } from 'src/layouts/auth-centered';

import { SplashScreen } from 'src/components/LoadingScreen';

import { GuestGuard } from 'src/auth/guard';

import { paths } from '../paths';

// ----------------------------------------------------------------------

const SignInPage = lazy(() => import('src/pages/Auth/SignIn'));
const VerifyEmail = lazy(() => import('src/pages/Auth/VerifyEmail'));
const VerifyResult = lazy(() => import('src/sections/SignUp/Info'));
const ForgotPasswordPage = lazy(() => import('src/pages/Auth/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('src/pages/Auth/ResetPassword'));
// const UpdatePasswordPage = lazy(() => import('src/pages/Auth/ResetPassword/updatePassword'));

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
      { path: 'thanks', element: <VerifyResult /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
      // { path: 'update-password', element: <UpdatePasswordPage /> },
    ],
  },
  {
    path: 'verify-email',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <GuestGuard>
          <AuthCenteredLayout>
            <VerifyEmail />
          </AuthCenteredLayout>
        </GuestGuard>
      </Suspense>
    ),
  },
];
