import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import RewardTab from 'src/sections/Reward/RewardTab';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function RewardWrapper({ children }: Props) {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Reward`}</title>

      <Breadcrumbs
        heading="Reward"
        sx={{
          mb: { xs: 1, md: 3 },
        }}
      />

      <RewardTab />
      {children}
    </>
  );
}
