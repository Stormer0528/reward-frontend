import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useSearchParams } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';
import { toast } from 'src/components/SnackBar';

import { useSendEmailVerification } from './useApollo';

export default function Info() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const { loading, sendVerification } = useSendEmailVerification();

  const handleSend = async () => {
    try {
      const { data } = await sendVerification({ variables: { data: { email: email ?? '' } } });

      if (data) {
        toast.success('Successfully sent!');
      }
    } catch (error) {
      console.log('error => ', error);
    }
  };

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Logo />
      </Stack>

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Welcome to Texitcoin
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Thank you for signing up with Texitcoin! We are excited to have you on board.
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          To complete the registration process and activate your account, our team will contact you
          shortly to collect the necessary payment.
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          If you have any questions or need further assistance, feel free to reach out our support
          team:
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          Email:{' '}
          <Link
            variant="subtitle1"
            sx={{
              cursor: 'pointer',
            }}
            href="mailto:mine@minetxc.com"
          >
            mine@minetxc.com
          </Link>
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Thank you
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          The Texitcoin Team
        </Typography>

        <Typography variant="body2">{`Click the send button if you haven't received an email in your inbox`}</Typography>

        <Stack direction="row" justifyContent="center">
          <LoadingButton variant="contained" color="primary" loading={loading} onClick={handleSend}>
            Send to Email
          </LoadingButton>
        </Stack>
      </Stack>
    </>
  );
}
