import { useMatch } from 'react-router';
import { varAlpha } from 'minimal-shared/utils';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

const STATUS_OPTIONS = [
  { value: 'approved', label: 'Approved', icon: <Iconify icon="duo-icons:approved" width={24} /> },
  { value: 'pending', label: 'Pending', icon: <Iconify icon="mdi:account-pending" width={24} /> },
  { value: 'added', label: 'Added', icon: <Iconify icon="heroicons:user-plus-solid" width={24} /> },
  { value: 'graveyard', label: 'Graveyard', icon: <Iconify icon="mdi:graveyard" width={24} /> },
  { value: 'tree', label: 'Tree', icon: <Iconify icon="bi:diagram-3" width={24} /> },
];

export const SponsorshipTab = () => {
  const router = useRouter();

  const param = useMatch(paths.dashboard.sponsorships.tabMatch);
  const tabParam = param?.params.tab;

  return (
    <Tabs
      value={tabParam || ''}
      onChange={(_, newTab) => {
        router.push(newTab);
      }}
      sx={[
        (theme) => ({
          px: 2.5,
          boxShadow: `inset 0 -2px 0 0 ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
        }),
      ]}
    >
      {STATUS_OPTIONS.map((tab) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} icon={tab.icon} />
      ))}
    </Tabs>
  );
};
