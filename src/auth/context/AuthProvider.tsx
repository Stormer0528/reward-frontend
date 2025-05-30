import { useLocation } from 'react-router';
import { useLazyQuery } from '@apollo/client';
import { useMemo, useState, useEffect, useCallback } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { STORAGE_TOKEN_KEY } from 'src/consts';

import { toast } from 'src/components/SnackBar';

import { FETCH_ME_QUERY } from 'src/sections/Profile/query';

import { setSession } from '../utils';
import { AuthContext } from './AuthContext';
import { setToken, isValidToken, setTokenTimer } from './utils';

import type { AuthContextValue } from '../types';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const token = localStorage.getItem(STORAGE_TOKEN_KEY);

  const router = useRouter();
  const [code, setCode] = useState<any>('');

  const { pathname } = useLocation();

  const [fetchMe, { loading, error, data }] = useLazyQuery(FETCH_ME_QUERY);

  const signIn = useCallback(
    (newToken: string) => {
      setSession(newToken);
      setToken(newToken);
      toast.success('Successfully logged in');
      router.push(paths.dashboard.history.root);
    },
    [router]
  );

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (token && isValidToken(token)) {
      fetchMe();
      timerId = setTokenTimer(token);
    } else if (!token && pathname === paths.dashboard.history.root) {
      router.push(paths.auth.signIn);
    }

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, pathname, fetchMe]);

  useEffect(() => {
    if (error) {
      toast.error('Your session has expired. Please login again.');
      signOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (code) {
      const timer = setTimeout(() => {
        setCode(null);
      }, 1800000); // 30 minutes

      return () => clearTimeout(timer); // Cleanup timer on unmount or code change
    }

    return undefined;
  }, [code]);

  // LOGOUT ACTION
  const signOut = useCallback(() => {
    setToken(null);
    router.push(paths.pages.intro.root);
  }, [router]);

  const user = data?.memberMe;

  const memoizedValue: AuthContextValue = useMemo(
    () => ({ user, token, code, isAuthenticated: !!token, loading, signIn, signOut, setCode }),
    [user, code, token, loading, signIn, signOut, setCode]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
