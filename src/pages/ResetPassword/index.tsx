import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SplitResetPasswordView, SplitUpdatePasswordView } from 'src/sections/ResetPassword';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      {token ? <SplitUpdatePasswordView token={token} /> : <SplitResetPasswordView />}
    </>
  );
}
