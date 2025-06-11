import { useEffect } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useSearchParams } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/Iconify';
import { InfinityLoader } from 'src/components/LoadingScreen';

import { useVerifyEmail } from './useApollo';

export function VerifyEmailView() {
  const theme = useTheme();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const { verifyEmail, loading, called, data } = useVerifyEmail();

  useEffect(() => {
    if (token) {
      verifyEmail({ token: token ?? '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSuccess = () => (
    <Stack justifyContent="center" alignItems="center">
      <Iconify
        icon="line-md:circle-to-confirm-circle-transition"
        color={theme.vars.palette.primary.main}
        width={60}
        height={60}
        sx={{ mt: '20px', mb: '20px' }}
      />
      <Typography variant="h5" sx={{ mb: 2 }} textAlign="center">
        Email verified successfully
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }} textAlign="center">
        Please{' '}
        <Link
          variant="subtitle2"
          underline="none"
          href={paths.auth.signIn}
          component={RouterLink}
          replace // important as verification page must be removed in history
        >
          login
        </Link>{' '}
        with verified email again.
      </Typography>
    </Stack>
  );

  const renderFail = () => (
    <Stack justifyContent="center" alignItems="center">
      <Iconify
        icon="line-md:close-circle"
        color={theme.vars.palette.error.main}
        width={60}
        height={60}
        sx={{ mt: '20px', mb: '20px' }}
      />
      <Typography variant="h5" sx={{ mb: 2 }} textAlign="center">
        Email verification failed
      </Typography>
      <Typography variant="body2" textAlign="center">
        The link you used is invalid or has expired.&nbsp;
        <Link
          variant="subtitle2"
          underline="none"
          href={paths.auth.signIn}
          component={RouterLink}
          replace // important as verification page must be removed in history
        >
          Retry
        </Link>
      </Typography>
    </Stack>
  );

  const renderLoading = () => (
    <Stack justifyContent="center" alignItems="center">
      <InfinityLoader />
      <Typography variant="h5" sx={{ mb: 2 }} textAlign="center">
        Verifying your email address...
      </Typography>
      <Typography variant="body2" textAlign="center">
        You will be asked to login again after verification succeed
      </Typography>
    </Stack>
  );

  return (
    <>
      {called && !loading
        ? data?.emailVerify.result === 'success'
          ? renderSuccess()
          : renderFail()
        : renderLoading()}
    </>
  );
}
