import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { toast } from 'src/components/SnackBar';

import { ResetPasswordView } from 'src/sections/ResetPassword/resetPassword';
import { useVerifyResetPasswordToken } from 'src/sections/ResetPassword/useApollo';

export default function Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  // const [tokenVerify, { loading, data, error }] = useMutation(VERIFY_RESET_PASSWORD_TOKEN);
  const { loading, data, error, verifyResetPasswordToken } = useVerifyResetPasswordToken();

  useEffect(() => {
    if (token) {
      verifyResetPasswordToken({ token });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (!loading && data && !error) {
      setIsOpen(true);
    } else if (!loading && !data && error) {
      toast.error(error.message);

      setTimeout(() => {
        window.location.href = paths.auth.forgotPassword;
      }, 1000);
    }
  }, [loading, data, error]);

  return (
    <>
      <title> {`${CONFIG.site.name} - Reset Password`}</title>

      {isOpen ? (
        <ResetPasswordView token={data?.verifyResetPasswordToken.token!} />
      ) : (
        <LoadingButton loading size="large" loadingIndicator={<CircularProgress />} />
      )}
    </>
  );
}
