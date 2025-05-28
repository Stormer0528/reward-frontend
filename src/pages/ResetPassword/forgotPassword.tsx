import { CONFIG } from 'src/config-global';

import { SplitResetPasswordView } from 'src/sections/ResetPassword/forgotPassword';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SplitResetPasswordView />
    </>
  );
}
