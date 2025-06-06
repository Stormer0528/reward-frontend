import { useMatch } from 'react-router';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

const TABS = [
  {
    value: 'history',
    label: 'History',
    icon: <Iconify icon="carbon:analytics" width={24} />,
  },
  { value: 'edit', label: 'Edit', icon: <Iconify icon="solar:pen-2-bold" width={24} /> },
];

export const ProfileTab = () => {
  const router = useRouter();

  const param = useMatch(paths.dashboard.profile.tabMatch);
  const tabParam = param?.params.tab;

  return (
    <Tabs
      value={tabParam || ''}
      onChange={(_, newTab) => {
        router.push(newTab);
      }}
      sx={{ mb: { xs: 2, md: 3 } }}
    >
      {TABS.map((tab) => (
        <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
      ))}
    </Tabs>
  );
};
