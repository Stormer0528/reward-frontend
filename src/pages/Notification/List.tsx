import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import NotificationListPage from 'src/sections/Notification/table';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Notifications`}</title>
      </Helmet>

      <NotificationListPage />
    </>
  );
}
