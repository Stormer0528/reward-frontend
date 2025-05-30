import { CONFIG } from 'src/config';

import { SplitResetPasswordView } from 'src/sections/Auth/ForgotPassword';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Reset password` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <SplitResetPasswordView />
    </>
  );
}
