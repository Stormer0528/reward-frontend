import { CONFIG } from 'src/config';

import { SignUpView } from 'src/sections/SignUp';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Sign Up` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <SignUpView />
    </>
  );
}
