import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { SponsorshipTab } from 'src/sections/Sponsorship/SponsorshipTab';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function SponsorshipWrapper({ children }: Props) {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Sponsorships`}</title>
      <Breadcrumbs
        heading="Sponsorships"
        links={[
          { name: 'Sponsorships', href: paths.dashboard.sponsorships.root },
          { name: 'List' },
        ]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={() => {}}
          >
            Add Miner
          </Button>
        }
      />

      <Card
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <SponsorshipTab />
        {children}
      </Card>
    </>
  );
}
