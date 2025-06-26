import { CONFIG } from 'src/config';

import { MaintenanceView } from 'src/sections/Maintenance';

export default function Page() {
  return (
    <>
      <title> {`${CONFIG.APP_NAME} - Maintenance`}</title>

      <MaintenanceView />
    </>
  );
}
