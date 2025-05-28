import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { SplashScreen } from 'src/components/loading-screen';

import { useAuthContext } from '../hooks';
import { setToken } from '../context/utils';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function GuestGuard({ children }: Props) {
  const router = useRouter();
  const location = useLocation();

  const searchParams = useSearchParams();

  const { loading, isAuthenticated } = useAuthContext();

  const [isChecking, setIsChecking] = useState<boolean>(true);

  const returnTo = searchParams.get('returnTo') || paths.root;

  const checkPermissions = async (): Promise<void> => {
    if (loading) {
      return;
    }

    if (isAuthenticated) {
      if (location.pathname === '/sign-up') {
        setToken(null);
      } else {
        router.replace(returnTo);
      }
      setIsChecking(false);
      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, loading]);

  if (isChecking) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
