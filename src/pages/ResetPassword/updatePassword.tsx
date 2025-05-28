import { CONFIG } from 'src/config-global';

import { UpdatePasswordView } from 'src/sections/ResetPassword/updatePassword';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <UpdatePasswordView />
    </>
  );
}
