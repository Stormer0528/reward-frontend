import { lazy, Suspense } from 'react';

import { AuthSplitLayout } from 'src/layouts/auth-split';

import { SplashScreen } from 'src/components/loading-screen';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/SignIn'));
const ResetPasswordPage = lazy(() => import('src/pages/ResetPassword'));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: 'sign-in',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <GuestGuard>
          <AuthSplitLayout section={{ title: 'Hi, Welcome back' }}>
            <LoginPage />
          </AuthSplitLayout>
        </GuestGuard>
      </Suspense>
    ),
  },
  {
    path: 'reset-password',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <GuestGuard>
          <AuthSplitLayout section={{ title: 'Reset Password' }}>
            <ResetPasswordPage />
          </AuthSplitLayout>
        </GuestGuard>
      </Suspense>
    ),
  },
];
