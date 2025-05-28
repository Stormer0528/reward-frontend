import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { toast } from 'src/components/SnackBar';

import { SplitUpdatePasswordView } from 'src/sections/ResetPassword/resetPassoword';

import { RESET_TOKEN_VERIFY } from './query';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const [tokenVerify, { loading, data, error }] = useMutation(RESET_TOKEN_VERIFY);

  useEffect(() => {
    if (token) {
      tokenVerify({ variables: { data: { token } } });
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
      <title> {metadata.title}</title>

      {isOpen ? (
        <SplitUpdatePasswordView token={data?.resetTokenVerify.token!} />
      ) : (
        <LoadingButton loading size="large" loadingIndicator={<CircularProgress />} />
      )}
    </>
  );
}
