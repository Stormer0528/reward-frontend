import { CONFIG } from 'src/config';

import { VerifyEmailView } from 'src/sections/VerifyEmail';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Email verification` };

export default function VerifyEmailPage() {
  return (
    <>
      <title>{metadata.title}</title>

      <VerifyEmailView />
    </>
  );
}
