import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, INumberFilterParams } from '@ag-grid-community/core';
import type { MemberStatistics } from './type';

import { useParams } from 'react-router';
import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';

import { AgGrid } from 'src/components/AgGrid';

import { useFetchMemberStatistics } from 'src/sections/Reward/useApollo';

export default function MemberStatisticsList() {
  const { id: statisticsId } = useParams();

  const colDefs = useMemo<ColDef<MemberStatistics>[]>(
    () => [
      {
        field: 'issuedAt',
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
        initialSort: 'desc',
        cellRenderer: ({ data }: CustomCellRendererProps<MemberStatistics>) =>
          formatDate(data?.issuedAt),
      },
      {
        field: 'hashPower',
        headerName: 'Hash Power',
        width: 250,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as INumberFilterParams,
      },
      {
        field: 'txcShared',
        headerName: 'Rewarded TXC',
        width: 250,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as INumberFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<MemberStatistics>) =>
          Number(data?.txcShared ?? 0) / 10 ** 8,
      },
      {
        field: 'percent',
        headerName: 'Percent',
        width: 250,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        sortable: false,
        filterParams: { buttons: ['reset'] } as INumberFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<MemberStatistics>) =>
          `${(data?.percent ?? 0) / 100} %`,
      },
    ],

    []
  );

  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(
    () => parseFilterModel({ statisticsId }, filter),
    [filter, statisticsId]
  );

  const { loading, rowCount, memberStatistics, fetchMemberStatistics } = useFetchMemberStatistics();

  useEffect(() => {
    fetchMemberStatistics({
      variables: { filter: graphQueryFilter, page, sort },
    });
  }, [graphQueryFilter, page, sort, fetchMemberStatistics]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Reward</Typography>

      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <AgGrid<MemberStatistics>
          gridKey="memberstatistics-list"
          loading={loading}
          rowData={memberStatistics}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </Container>
  );
}
