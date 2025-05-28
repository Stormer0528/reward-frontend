import { CONFIG } from 'src/config';

import { SignUpView } from 'src/sections/SignUp';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Sign Up` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignUpView />
    </>
  );
}
