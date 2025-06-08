import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { TeamTab } from 'src/sections/TeamCommission/TeamTab';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function TeamWrapper({ children }: Props) {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Team`}</title>

      <Breadcrumbs
        heading="Team"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <TeamTab />
      {children}
    </>
  );
}
