import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  ISetFilterParams,
  IDateFilterParams,
  ITextFilterParams,
} from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { formatID } from 'src/utils/helper';
import { fNumber } from 'src/utils/formatNumber';
import { formatDate } from 'src/utils/format-time';

import { TXC_REQUEST_STATUS } from 'src/consts';
import { DashboardContent } from 'src/layouts/dashboard';
import { TxcRequestStatus } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { parseType } from './parseType';
import { useFetchTXCRequestList } from '../useApollo';

import type { BasicTXCRequest } from './type';

export default function TXCRequestList() {
  const { loading, rowCount, txcRequests } = useFetchTXCRequestList();

  const { copy } = useCopyToClipboard();

  const onCopy = (value: string) => {
    if (value) {
      copy(value);
      toast.success('Copied');
    }
  };

  const colDefs = useMemo<ColDef<BasicTXCRequest>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 200,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicTXCRequest>) =>
          formatID(data?.ID ?? '', 'T'),
      },
      {
        field: 'walletAddress',
        headerName: 'Wallet Address',
        flex: 1,
        minWidth: 500,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicTXCRequest>) => (
          <Stack direction="row" spacing={2} alignItems="center" mt={0.5}>
            <Typography variant="body1">{data?.walletAddress}</Typography>
            <Iconify
              icon="stash:copy-light"
              sx={{ cursor: 'pointer' }}
              onClick={() => onCopy(data?.walletAddress ?? '')}
            />
          </Stack>
        ),
      },
      {
        field: 'amount',
        headerName: 'Amount',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicTXCRequest>) => fNumber(data?.amount),
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 200,
        filter: 'agMultiColumnFilter',
        filterParams: {
          values: Object.values(TxcRequestStatus),
          valueFormatter: (params: any) => parseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<BasicTXCRequest>,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicTXCRequest>) =>
          data ? TXC_REQUEST_STATUS[data.status] : '',
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicTXCRequest>) =>
          formatDate(data?.createdAt),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="TXC Request"
        links={[{ name: 'TXC Request', href: paths.dashboard.txcRequest.root }, { name: 'list' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Button
            component={RouterLink}
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            href="new"
          >
            New
          </Button>
        }
      />

      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <AgGrid<BasicTXCRequest>
          gridKey="txc-request-list"
          loading={loading}
          rowData={txcRequests}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </DashboardContent>
  );
}
