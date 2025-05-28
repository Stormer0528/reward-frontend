import { useBoolean } from 'minimal-shared/hooks';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { useQuery } from 'src/routes/hooks';

import { useTabs } from 'src/hooks/use-tabs';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { usePopover } from 'src/components/custom-popover';

import AddMiner from './Create';
import SponsorList from './SponsorList';
import SponsorTree from './SponsorTree';

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

export default function SponsorView() {
  const add = useBoolean();
  const popover = usePopover();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { setQueryParams: setQuery }] = useQuery();

  const tabs = useTabs('approved');

  const handleTabChange = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    add.onFalse();
    tabs.onChange(event, newValue);
    setQuery({});
  };

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Sponsor"
        links={[{ name: 'Sponsor', href: paths.dashboard.sponsor.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Stack direction="row" columnGap={1}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="fa6-solid:plus" />}
              onClick={() => {
                add.onTrue();
                tabs.onChange(null as any, '');
              }}
            >
              Add Miner
            </Button>

            {tabs.value === 'tree' && (
              <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
                <Iconify icon="eva:more-horizontal-fill" />
              </IconButton>
            )}
          </Stack>
        }
      />

      <Tabs value={tabs.value} onChange={handleTabChange} sx={{ mb: 1 }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {add.value ? (
        <AddMiner add={add} tabs={tabs} />
      ) : (
        <>
          {tabs.value === 'approved' && <SponsorList filter={{ allowState: 'APPROVED' }} />}

          {tabs.value === 'pending' && <SponsorList filter={{ allowState: 'PENDING' }} />}

          {tabs.value === 'added' && <SponsorList filter={{ allowState: 'ADDED' }} />}

          {tabs.value === 'graveyard' && <SponsorList filter={{ allowState: 'GRAVEYARD' }} />}

          {tabs.value === 'tree' && <SponsorTree popover={popover} />}
        </>
      )}
    </DashboardContent>
  );
}
