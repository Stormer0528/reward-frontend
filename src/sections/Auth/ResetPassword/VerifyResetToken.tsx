import { useEffect } from 'react';
import { Navigate } from 'react-router';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/Iconify';
import { InfinityLoader } from 'src/components/LoadingScreen';

import { useVerifyResetToken } from './useApollo';

// ----------------------------------------------------------------------

interface Props {
  token: string;
}

// ----------------------------------------------------------------------

export function VerifyResetTokenView({ token }: Props) {
  const theme = useTheme();
  const { submitVerifyResetToken, loading, called, error, newToken } = useVerifyResetToken();

  useEffect(() => {
    submitVerifyResetToken({ token });
  }, [submitVerifyResetToken, token]);

  const renderLoading = () => (
    <Stack justifyContent="center" alignItems="center">
      <InfinityLoader />
      <Typography variant="h5" sx={{ mb: 2 }} textAlign="center">
        Validating the request...
      </Typography>
      <Typography variant="body2" textAlign="center">
        We&apos;re just validating the information, and this will only take a moment. We appreciate
        your patience.
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
        Validation failed
      </Typography>
      <Typography variant="body2" textAlign="center">
        The link you used is invalid or has expired.
        <br />
        <Link
          variant="subtitle2"
          underline="none"
          href={paths.auth.forgotPassword}
          component={RouterLink}
          replace // important as verification page must be removed in history
        >
          Retry
        </Link>
      </Typography>
    </Stack>
  );

  if (called && !loading) {
    if (error) {
      return <>{renderFail()}</>;
    }

    return <Navigate to="." state={{ newToken }} />;
  }

  return <>{renderLoading()}</>;
}
