import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { SignUpView } from 'src/sections/SignUp';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Sign Up` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignUpView />
    </>
  );
}
