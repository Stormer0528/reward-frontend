import { z as zod } from 'zod';
import { useEffect } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';
import { LoadingScreen } from 'src/components/loading-screen';

import { useVerifyEmail } from './useApollo';

// ----------------------------------------------------------------------

export type VerifySchemaType = zod.infer<typeof VerifySchema>;

export const VerifySchema = zod.object({
  code: zod
    .string()
    .min(1, { message: 'Code is required!' })
    .min(6, { message: 'Code must be at least 6 characters!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
});

// ----------------------------------------------------------------------

export default function AmplifyVerifyView() {
  const loading = useBoolean();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const { verifyEmail } = useVerifyEmail();

  const info = (
    <>
      <Stack direction="row" justifyContent="center">
        <Iconify icon="fa:check-circle" color="#008220" width={60} />
      </Stack>

      <Stack spacing={1} sx={{ mt: 3, mb: 8, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Successfully Verified!
        </Typography>
      </Stack>

      <Link
        variant="subtitle2"
        sx={{
          cursor: 'pointer',
          textAlign: 'center',
        }}
        href={paths.auth.signIn}
      >
        Back to Sign In
      </Link>
    </>
  );

  useEffect(() => {
    async function handleVerify() {
      try {
        const { data } = await verifyEmail({ variables: { data: { token: token ?? '' } } });

        if (data) {
          loading.onTrue();
        }
      } catch (error) {
        console.log('error => ', error);
      }
    }

    handleVerify();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <>{loading.value ? info : <LoadingScreen />}</>;
}
