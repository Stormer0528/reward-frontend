import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { AuthSplitLayout } from 'src/layouts/auth-split';

import { SplashScreen } from 'src/components/loading-screen';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/SignIn'));
const ForgotPasswordPage = lazy(() => import('src/pages/ResetPassword/forgotPassword'));
const ResetPasswordPage = lazy(() => import('src/pages/ResetPassword/resetPassword'));

const signIn = {
  path: 'sign-in',
  element: (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Hi, Welcome Minetxc' }}>
        <LoginPage />
      </AuthSplitLayout>
    </GuestGuard>
  ),
};

const forgotPassword = {
  path: 'forgot-password',
  element: (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Hi, Welcome Minetxc' }}>
        <ForgotPasswordPage />
      </AuthSplitLayout>
    </GuestGuard>
  ),
};

const resetPassword = {
  path: 'reset-password',
  element: (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Hi, Welcome Minetxc' }}>
        <ResetPasswordPage />
      </AuthSplitLayout>
    </GuestGuard>
  ),
};

export const authRoutes = [
  {
    path: '',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [signIn, forgotPassword, resetPassword],
  },
];
