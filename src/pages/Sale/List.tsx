import { useBoolean } from 'minimal-shared/hooks';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import SaleList from 'src/sections/Sales/List';
import Packages from 'src/sections/Sales/List/Packages';
import { useFetchOrderAvailablePoint } from 'src/sections/Sales/useApollo';

// ----------------------------------------------------------------------

export default function SaleListPage() {
  const open = useBoolean();
  // TODO: Consider fetching in page is not correct...
  const { available } = useFetchOrderAvailablePoint();

  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Orders`}</title>
      <Breadcrumbs
        heading="Orders"
        sx={{
          mb: { xs: 1, md: 3 },
        }}
        action={
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="mingcute:add-line" />}
              href={paths.dashboard.txcRequest.new}
            >
              Buy TXC
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={open.onTrue}
              disabled={available === 0}
            >
              Add more hash
            </Button>
          </Stack>
        }
      />
      <SaleList />

      <Packages open={open} available={available} />
    </>
  );
}
