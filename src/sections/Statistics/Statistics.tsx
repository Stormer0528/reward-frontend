import type {
  GridSlots,
  GridColDef,
  GridSortModel,
  GridFilterModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import { useMemo, useState, useCallback } from 'react';
import { useQuery as useGraphQuery } from '@apollo/client';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import ListItemText from '@mui/material/ListItemText';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useDataGridQuery } from 'src/routes/hooks';

import { debounce } from 'src/utils/debounce';
import { parseFilter } from 'src/utils/parseFilter';
import { fDate, fTime, formatDate } from 'src/utils/format-time';

import { Label } from 'src/components/Label';
import { EmptyContent } from 'src/components/EmptyContent';
import { DataGridSkeleton, DataGridPagination } from 'src/components/DataGrid';

import { TableToolBar } from './TableToolBar';
import { FETCH_STATISTICS_QUERY } from './query';

interface Props {
  status?: boolean;
}

export default function StatisticsTable({ status = false }: Props) {
  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'issuedAt',
        headerName: 'Date',
        width: 150,
        renderCell: (params) => formatDate(params.row.issuedAt),
      },
      { field: 'newBlocks', headerName: 'New Blocks', width: 150 },
      { field: 'totalBlocks', headerName: 'Total Blocks', width: 150 },
      { field: 'totalHashPower', headerName: 'Total HashPower', width: 200 },
      { field: 'totalMembers', headerName: 'Total Members', width: 180 },
      {
        field: 'txcShared',
        headerName: 'TXC Shared',
        flex: 1,
        renderCell: (params) => params.row.txcShared / 10 ** 8,
      },
      {
        field: 'diff',
        headerName: 'Diff',
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params) =>
          (params.row.newBlocks * 254 * 10 ** 8 - params.row.txcShared) / 10 ** 8,
      },
      {
        field: 'from',
        headerName: 'From',
        width: 150,
        renderCell: (params) => (
          <ListItemText
            primary={fDate(params.row.from)}
            secondary={fTime(params.row.from)}
            primaryTypographyProps={{ typography: 'caption', noWrap: true }}
            secondaryTypographyProps={{
              component: 'span',
              typography: 'caption',
            }}
          />
        ),
      },
      {
        field: 'to',
        headerName: 'To',
        width: 150,
        renderCell: (params) => (
          <ListItemText
            primary={fDate(params.row.to)}
            secondary={fTime(params.row.to)}
            primaryTypographyProps={{ typography: 'caption', noWrap: true }}
            secondaryTypographyProps={{
              component: 'span',
              typography: 'caption',
            }}
          />
        ),
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <>
            {params.row.status ? (
              <Label variant="soft" color="success">
                Confirmed
              </Label>
            ) : (
              <Label variant="soft" color="error">
                Pending
              </Label>
            )}
          </>
        ),
      },
    ],
    []
  );

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>();

  const [query, { setPage, setPageSize, setSort, setFilter }] = useDataGridQuery<GridFilterModel>();

  const {
    page = { page: 1, pageSize: 10 },
    sort = [{ field: 'issuedAt', sort: 'asc' }],
    filter,
  } = query;

  const graphQueryFilter = useMemo(
    () => parseFilter({ ...filter, ...(status && { status: true }) }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter]
  );

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return sort.map(({ field, sort: order }) => `${order === 'asc' ? '' : '-'}${field}`).join(',');
  }, [sort]);

  const { loading, data } = useGraphQuery(FETCH_STATISTICS_QUERY, {
    variables: {
      page: page && `${page.page},${page.pageSize}`,
      filter: graphQueryFilter,
      sort: graphQuerySort,
    },
  });

  const statistics = data?.statistics.statistics ?? [];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFilterChange = useCallback(
    debounce((value) => {
      setFilter(value);
    }, 500),
    [setFilter]
  );

  const onFilterChange = useCallback(
    (filterModel: GridFilterModel) => {
      debouncedFilterChange(
        ['isEmpty', 'isNotEmpty'].includes(filterModel.items?.[0]?.operator) ||
          filterModel.items?.[0]?.value !== undefined
          ? filterModel
          : {}
      );
    },
    [debouncedFilterChange]
  );

  const onSortChange = useCallback(
    (newSortModel: GridSortModel) => {
      setSort(newSortModel);
    },
    [setSort]
  );

  const paginationModel = useMemo(() => ({ page: page.page - 1, pageSize: page.pageSize }), [page]);

  return (
    <Grid container spacing={1}>
      <Card
        sx={{
          width: '100%',
          m: 0.5,
          mt: 2,
          borderRadius: 1.5,
        }}
      >
        <DataGrid
          loading={loading}
          rows={statistics}
          columns={columns}
          density="compact"
          filterMode="server"
          onFilterModelChange={onFilterChange}
          initialState={{ filter: { filterModel: filter } }}
          sortModel={sort.map((item) => ({ ...item, sort: item.sort === 'asc' ? 'desc' : 'asc' }))}
          onSortModelChange={onSortChange}
          rowCount={data?.statistics.total!}
          paginationMode="server"
          pageSizeOptions={[10, 25, 50, 100]}
          paginationModel={paginationModel}
          onRowClick={(params) => window.open(paths.dashboard.reward.detail(params.row.id))}
          onPaginationModelChange={({ page: newPage, pageSize }) => {
            if (newPage + 1 !== page.page) {
              setPage(newPage + 1);
            }
            if (pageSize !== page.pageSize) {
              setPageSize(pageSize);
            }
          }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
          slots={{
            toolbar: TableToolBar as GridSlots['toolbar'],
            noRowsOverlay: () => <EmptyContent />,
            noResultsOverlay: () => <EmptyContent title="No statistics found" />,
            loadingOverlay: DataGridSkeleton,
            pagination: DataGridPagination,
          }}
          sx={{
            [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' },
            cursor: 'pointer',
          }}
        />
      </Card>
    </Grid>
  );
}
