import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  ISetFilterParams,
  IDateFilterParams,
  ITextFilterParams,
} from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { formatID } from 'src/utils/helper';
import { formatDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/formatNumber';

import { REIMBURSEMENT_STATUS } from 'src/consts';
import { DashboardContent } from 'src/layouts/dashboard';
import { ReimbursementStatus } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';
import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { parseType } from './parseType';
import { FileRenderer } from './FileRender';
import { useFetchReimbursement } from '../useApollo';

import type { BasicReimbursement } from './type';

export function ReimbursementList() {
  const { loading, rowCount, reimbursements } = useFetchReimbursement();

  const colDefs = useMemo<ColDef<BasicReimbursement>[]>(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) =>
          formatID(data?.id ?? '', 'R'),
      },
      {
        field: 'amountInCent',
        headerName: 'Amount',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) =>
          fCurrency((data?.amountInCent ?? 0) / 100, { minimumFractionDigits: 2 }),
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        width: 100,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        colId: 'attached',
        headerName: 'Attachment',
        width: 200,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellRenderer: FileRenderer,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 150,
        filter: 'agMultiColumnFilter',
        filterParams: {
          values: Object.values(ReimbursementStatus),
          valueFormatter: (params: any) => parseType(params.value),
          defaultToNothingSelected: true,
        } as ISetFilterParams<BasicReimbursement>,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) =>
          data ? REIMBURSEMENT_STATUS[data.status] : '',
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
        cellRenderer: ({ data }: CustomCellRendererProps<BasicReimbursement>) =>
          formatDate(data?.createdAt),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Reimbursement"
        links={[
          { name: 'Reimbursement', href: paths.dashboard.reimbursement.root },
          { name: 'List' },
        ]}
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

      <Card sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <AgGrid<BasicReimbursement>
          gridKey="reimbursement-list"
          loading={loading}
          rowData={reimbursements}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </DashboardContent>
  );
}
