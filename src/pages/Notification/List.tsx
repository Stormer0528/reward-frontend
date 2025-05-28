import { CONFIG } from 'src/config';

import NotificationListPage from 'src/sections/Notification/table';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Notifications`}</title>

      <NotificationListPage />
    </>
  );
}
