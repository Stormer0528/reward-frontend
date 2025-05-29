import { Navigate } from 'react-router';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { LoadingScreen } from 'src/components/LoadingScreen';

import CommissionList from 'src/sections/Commission/List';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function Page() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to={paths.notFound} replace />;
  }

  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Commission`}</title>

      <CommissionList me={user} />
    </>
  );
}
