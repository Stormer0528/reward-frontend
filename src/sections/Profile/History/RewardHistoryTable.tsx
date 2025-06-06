import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type {
  ColDef,
  IDateFilterParams,
  ITextFilterParams,
  INumberFilterParams,
} from '@ag-grid-community/core';
import type { MemberStatistics } from 'src/sections/MemberStatistics/List/type';

import { useParams } from 'react-router';
import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';

import { useQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';

import { AgGrid } from 'src/components/AgGrid';

import { useFetchMemberStatistics } from 'src/sections/Reward/useApollo';

export function RewardHistoryTable() {
  const { id: memberId } = useParams();
  const [{ page = '1,10', sort = 'createdAt', filter }, { setPageSize }] = useQueryString();

  const graphQueryFilter = useMemo(
    () => parseFilterModel({ memberId }, filter),
    [filter, memberId]
  );

  const { loading, rowCount, memberStatistics, fetchMemberStatistics } = useFetchMemberStatistics();

  const colDefs = useMemo<ColDef<MemberStatistics>[]>(
    () => [
      {
        field: 'issuedAt',
        headerName: 'Date',
        width: 200,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        initialSort: 'desc',
        cellRenderer: ({ data }: CustomCellRendererProps<MemberStatistics>) =>
          formatDate(data?.issuedAt),
      },
      {
        field: 'member.username',
        headerName: 'Username',
        flex: 1,
        minWidth: 250,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellClass: 'ag-cell-center',
      },
      {
        field: 'hashPower',
        headerName: 'Hash Power',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as INumberFilterParams,
      },
      {
        field: 'txcShared',
        headerName: 'Rewarded TXC',
        width: 150,
        resizable: true,
        editable: false,
        sortable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<MemberStatistics>) =>
          Number(data?.txcShared ?? 0) / 10 ** 8,
      },
      {
        field: 'percent',
        headerName: 'Percent',
        width: 150,
        resizable: true,
        editable: false,
        sortable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<MemberStatistics>) =>
          `${Number(data?.percent ?? 0) / 100} %`,
      },
    ],

    []
  );

  useEffect(() => {
    setPageSize(10);
  }, [setPageSize]);

  useEffect(() => {
    fetchMemberStatistics({
      variables: { filter: graphQueryFilter, page, sort },
    });
  }, [graphQueryFilter, page, sort, fetchMemberStatistics]);

  return (
    <Card
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
        height: 'calc(100vh - 400px)',
      }}
    >
      <AgGrid<MemberStatistics>
        gridKey="history-member-statistics"
        loading={loading}
        rowData={memberStatistics}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
