import { CONFIG } from 'src/config';

import { SignInView } from 'src/sections/SignIn';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Sign in` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignInView />
    </>
  );
}
