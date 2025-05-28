import { Navigate } from 'react-router-dom';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { LoadingScreen } from 'src/components/loading-screen';

import TeamCommission from 'src/sections/TeamCommission';

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
      <title>{`${CONFIG.site.name} / Team`}</title>

      <TeamCommission me={user} />
    </>
  );
}
