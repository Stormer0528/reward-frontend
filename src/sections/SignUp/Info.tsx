import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Logo } from 'src/components/logo';

export default function Info() {
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

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          The Texitcoin Team
        </Typography>

        <Link
          variant="subtitle2"
          sx={{
            cursor: 'pointer',
          }}
          href={paths.intro.root}
        >
          Back to Homepage
        </Link>
      </Stack>
    </>
  );
}
