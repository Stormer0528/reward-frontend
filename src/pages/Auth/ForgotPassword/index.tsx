import { CONFIG } from 'src/config';

import { ForgotPasswordView } from 'src/sections/Auth/ForgotPassword';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Forgot password` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <ForgotPasswordView />
    </>
  );
}
