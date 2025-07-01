import React from 'react';
import { useMatch } from 'react-router';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

const TABS = [
  { value: 'approved', label: 'Approved', icon: <Iconify icon="duo-icons:approved" width={24} /> },
  { value: 'pending', label: 'Pending', icon: <Iconify icon="mdi:account-pending" width={24} /> },
  { value: 'added', label: 'Added', icon: <Iconify icon="heroicons:user-plus-solid" width={24} /> },
  {
    value: 'graveyard',
    label: 'Graveyard',
    icon: <Iconify icon="mdi:graveyard" width={24} />,
  },
  { value: 'tree', label: 'Tree', icon: <Iconify icon="bi:diagram-3" width={24} /> },
];

interface Props {
  children: React.ReactNode;
}

export default function Sponsor({ children }: Props) {
  const router = useRouter();

  const param = useMatch(paths.dashboard.sponsor.tabMatch);
  const tabParam = param?.params.tab;

  const handleTabChange = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    router.push(newValue);
  };

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Sponsorships"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="fa6-solid:plus" />}
            onClick={() => {
              router.push(`${paths.dashboard.sponsor.root}/new`);
            }}
          >
            Add Miner
          </Button>
        }
      />

      <Tabs value={tabParam || ''} onChange={handleTabChange} sx={{ mb: 1 }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>
      {children}
    </DashboardContent>
  );
}
