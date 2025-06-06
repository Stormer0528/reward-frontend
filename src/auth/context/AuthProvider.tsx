import type { AuthContextValue } from '../types';

import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

import { toast } from 'src/components/SnackBar';

import { useFetchMe } from '../useApollo';
import { AuthContext } from './AuthContext';
import { getSession, setSession, getTimeToLive } from '../utils';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

const initialToken = getSession();

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | undefined | null>(initialToken);
  const timeToLive = useMemo(() => getTimeToLive(token), [token]);
  const timerId = useRef<NodeJS.Timeout | undefined>(undefined);

  const { fetchMe, user, loading, error } = useFetchMe();

  const expireToken = useCallback(() => {
    setToken(null);
    setSession(null);
    toast.error('Your session has expired. Please sign in again.');
    // TODO: Redirect to previous page if exists or maybe, AuthGuard can handle this?
  }, []);

  const signIn = useCallback((newToken: string) => {
    setSession(newToken);
    setToken(newToken);
  }, []);

  const signOut = useCallback(() => {
    setSession(null);
    setToken(null);
    toast.success('You have successfully signed out.');
  }, []);

  useEffect(() => {
    if (token) {
      if (timeToLive <= 0) {
        expireToken();
      } else {
        fetchMe();
      }
    }
  }, [token, timeToLive, expireToken, fetchMe]);

  useEffect(() => {
    if (error) {
      expireToken();
      return;
    }

    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        expireToken();
      }, timeToLive);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timerId.current);
    };
  }, [timeToLive, error, expireToken]);

  const memoizedValue: AuthContextValue = useMemo(
    () => ({ user, token, isAuthenticated: !!token, loading, signIn, signOut }),
    [user, token, loading, signIn, signOut]
  );

  return <AuthContext value={memoizedValue}>{children}</AuthContext>;
}
