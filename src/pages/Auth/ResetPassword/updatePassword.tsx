// TODO: Move this to Profile????
import { CONFIG } from 'src/config';

import { UpdatePasswordView } from 'src/sections/Auth/ResetPassword/UpdatePassword';

// ----------------------------------------------------------------------

const metadata = { title: ` ${CONFIG.APP_NAME} - Reset password` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <UpdatePasswordView />
    </>
  );
}
