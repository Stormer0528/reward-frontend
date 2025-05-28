import type { SortOrder } from 'src/routes/hooks/useQuery';
import type { IMemberStatisticsPrismaFilter, IMemberStatisticsTableFilters } from './types';

import { useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery as useGraphQuery } from '@apollo/client';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { useQuery } from 'src/routes/hooks';

import { ScrollBar } from 'src/components/ScrollBar';
import { SearchInput } from 'src/components/SearchInput';
import { LoadingScreen } from 'src/components/loading-screen';
import {
  useTable,
  TableNoData,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import { FETCH_MEMBERSTATISTICS_QUERY } from 'src/sections/Reward/query';

import MemberStatisticsTableRow from './MemberStatisticsTableRow';
import MemberStatisticsTableFiltersResult from './MemberStatisticsTableFiltersResult';

const TABLE_HEAD = [
  { id: 'issuedAt', label: 'Date', width: 250, sortable: true },
  { id: 'hashPower', label: 'Hash Power', width: 200, sortable: true },
  { id: 'reward', label: 'Rewarded TXC', width: 300, sortable: true },
  { id: 'percent', label: 'Percent', width: 130, sortable: true },
];

const defaultFilter: IMemberStatisticsTableFilters = {
  search: '',
};

export default function MemberStatistics() {
  const { id: statisticsId } = useParams();

  const table = useTable({ defaultDense: true });

  const [query, { setQueryParams: setQuery, setPage, setPageSize }] =
    useQuery<IMemberStatisticsTableFilters>();

  const {
    page = { page: 1, pageSize: 10 },
    sort = { createdAt: 'desc' },
    filter = { ...defaultFilter, statisticsId },
  } = query;

  const graphQueryFilter = useMemo(() => {
    const filterObj: IMemberStatisticsPrismaFilter = {};
    if (filter.search) {
      filterObj.OR = [{ member: { wallet: { contains: filter.search, mode: 'insensitive' } } }];
    }

    filterObj.statisticsId = statisticsId;

    return filterObj;
  }, [filter, statisticsId]);

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return Object.entries(sort)
      .map(([key, value]) => `${value === 'asc' ? '' : '-'}${key}`)
      .join(',');
  }, [sort]);

  const { loading, data } = useGraphQuery(FETCH_MEMBERSTATISTICS_QUERY, {
    variables: {
      page: page && `${page.page},${page.pageSize}`,
      filter: graphQueryFilter,
      sort: graphQuerySort,
    },
  });

  const canReset = !!filter.search;

  const tableData = data?.memberStatistics ?? { memberStatistics: [], total: 0 };

  const notFound =
    (canReset && !tableData?.memberStatistics?.length) || !tableData?.memberStatistics?.length;

  const handleSearchChange = useCallback(
    (value: string) => {
      setQuery({ ...query, filter: { ...filter, search: value } });
    },
    [setQuery, query, filter]
  );

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Reward</Typography>

      <Card sx={{ mt: 2 }}>
        <SearchInput search={filter.search} onSearchChange={handleSearchChange} />
        {canReset && !loading && (
          <MemberStatisticsTableFiltersResult results={tableData.total!} sx={{ p: 2.5, pt: 0 }} />
        )}

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <ScrollBar>
            {loading ? (
              <LoadingScreen />
            ) : (
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={sort && sort[Object.keys(sort)[0]]}
                  orderBy={sort && Object.keys(sort)[0]}
                  headLabel={TABLE_HEAD}
                  rowCount={loading ? 0 : tableData?.memberStatistics?.length}
                  onSort={(id) => {
                    const isAsc = sort && sort[id] === 'asc';
                    const newSort = { [id]: isAsc ? 'desc' : ('asc' as SortOrder) };
                    setQuery({ ...query, sort: newSort });
                  }}
                />
                <TableBody>
                  {tableData.memberStatistics!.map((row) => (
                    <MemberStatisticsTableRow
                      key={row!.id}
                      row={row!}
                      selected={table.selected.includes(row!.id)}
                    />
                  ))}

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            )}
          </ScrollBar>
        </TableContainer>

        <TablePaginationCustom
          count={loading ? 0 : tableData.total!}
          page={loading ? 0 : page!.page - 1}
          rowsPerPage={page?.pageSize}
          onPageChange={(_, curPage) => {
            setPage(curPage + 1);
          }}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 10));
          }}
          //
          dense={table.dense}
          onChangeDense={table.onChangeDense}
        />
      </Card>
    </Container>
  );
}
