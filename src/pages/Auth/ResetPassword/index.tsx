import { Navigate, useLocation } from 'react-router';

import { paths } from 'src/routes/paths';
import { useSearchParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config';

import { ResetPasswordView, VerifyResetTokenView } from 'src/sections/Auth/ResetPassword';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Reset password` };

export default function ResetPasswordPage() {
  const { state } = useLocation();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  if (!token) {
    return <Navigate to={paths.notFound} replace />;
  }

  return (
    <>
      <title>{metadata.title}</title>

      {state?.newToken ? (
        <ResetPasswordView token={state.newToken} />
      ) : (
        <VerifyResetTokenView token={token} />
      )}
    </>
  );
}
