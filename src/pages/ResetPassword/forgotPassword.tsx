import { CONFIG } from 'src/config';

import { ForgotPasswordView } from 'src/sections/ResetPassword/forgotPassword';

export default function Page() {
  return (
    <>
      <title> {`${CONFIG.site.name} - Forgot Password`}</title>

      <ForgotPasswordView />
    </>
  );
}
