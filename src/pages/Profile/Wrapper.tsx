import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { ProfileTab } from 'src/sections/Profile/ProfileTab';

// ----------------------------------------------------------------------
type Props = {
  children: React.ReactNode;
};

// ----------------------------------------------------------------------

export default function ProfileWrapper({ children }: Props) {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Profile`}</title>
      <Breadcrumbs
        heading="Profile"
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <ProfileTab />
      {children}
    </>
  );
}
