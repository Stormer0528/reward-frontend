import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  ISetFilterParams,
  IDateFilterParams,
  ITextFilterParams,
} from '@ag-grid-community/core';
import type { WeeklyCommission } from '../type';
import type { Member } from 'src/__generated__/graphql';

import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';

import { paths } from 'src/routes/paths';
import { useQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';

import { DashboardContent } from 'src/layouts/dashboard';

import { Label } from 'src/components/Label';
import { AgGrid } from 'src/components/AgGrid';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { useFetchCommissions } from 'src/sections/Commission/useApollo';

interface Props {
  me: Member;
}

export default function Commission({ me }: Props) {
  const [{ page = '1,50', sort = 'ID', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const colDefs = useMemo<ColDef<WeeklyCommission>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        initialSort: 'desc',
        cellClass: 'tabular-nums ag-cell-center',
      },
      {
        field: 'weekStartDate',
        headerName: 'Week',
        width: 150,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          formatDate(data?.weekStartDate),
        cellClass: 'ag-cell-center',
      },
      {
        headerName: 'BegLR',
        width: 100,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.begL}, R${data?.begR}`,
      },
      {
        headerName: 'NewLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.newL}, R${data?.begR}`,
      },
      {
        headerName: 'MaxLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.maxL}, R${data?.maxR}`,
      },
      {
        headerName: 'Package',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.pkgL}, R${data?.pkgR}`,
      },
      {
        headerName: 'EndLR',
        width: 120,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-cell-center',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.endL}, R${data?.endR}`,
      },
      {
        field: 'commission',
        headerName: 'Commission',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-cell-center',
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 120,
        filter: 'agMultiColumnFilter',
        filterParams: {
          values: ['true', 'false'],
          valueFormatter: BooleanFormatter,
        } as ISetFilterParams<WeeklyCommission>,
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) => (
          <Label variant="soft" color={data?.status ? 'success' : 'error'}>
            {data?.status ? 'Approved' : 'Pending'}
          </Label>
        ),
      },
      {
        field: 'shortNote',
        headerName: 'Note',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellClass: 'ag-cell-center',
      },
    ],

    []
  );

  const { fetchCommissions, loading, rowCount, weeklyCommissions } = useFetchCommissions();

  useEffect(() => {
    fetchCommissions({
      variables: {
        filter: graphQueryFilter,
        page,
        sort,
      },
    });
  }, [graphQueryFilter, page, sort, fetchCommissions]);

  return (
    <DashboardContent sx={{ overflowX: 'hidden' }}>
      <Breadcrumbs
        heading="Commission"
        links={[{ name: 'Commission', href: paths.dashboard.commission.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <AgGrid<WeeklyCommission>
          gridKey="commission-list"
          loading={loading}
          rowData={weeklyCommissions}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </DashboardContent>
  );
}

const BooleanFormatter = (params: any) => (params.value === 'true' ? 'Approved' : 'Pending');
