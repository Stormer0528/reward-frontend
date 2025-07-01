import { CONFIG } from 'src/config';

import { UpdatePasswordView } from 'src/sections/ResetPassword/updatePassword';

export default function Page() {
  return (
    <>
      <title> {`${CONFIG.site.name} - Update Password`}</title>

      <UpdatePasswordView />
    </>
  );
}
