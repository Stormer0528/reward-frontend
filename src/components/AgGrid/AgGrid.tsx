import type { ChangeEvent } from 'react';
import type { AgGridReactProps } from '@ag-grid-community/react';
import type {
  GridState,
  FilterModel,
  GridReadyEvent,
  SortChangedEvent,
  ColumnResizedEvent,
  FilterChangedEvent,
} from '@ag-grid-community/core';

import isEqual from 'lodash/isEqual';
import { useRef, useMemo, useCallback } from 'react';

import { AgGridReact } from '@ag-grid-community/react';
import { themeQuartz, iconSetQuartzLight } from '@ag-grid-community/theming';

import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import { useAgQuery } from 'src/routes/hooks';

import { debounce } from 'src/utils/lodash';

import { Pagination } from './Pagination';
import { SkeletonLoader } from './SkeletonLoader';
import { ClientSideRowModelModule } from './ClientSideRowModel';

interface Props<TData = any> extends AgGridReactProps<TData> {
  /** The key to save column order and width to local-storage */
  gridKey: string;

  /** Total row counts */
  totalRowCount?: number;
}

export const AgGrid = <TData,>(props: Props<TData>) => {
  const { gridKey, totalRowCount, pagination = true, modules, ...restProps } = props;

  const gridRef = useRef<AgGridReact<TData>>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const [query, { setPage, setPageSize, setSort, setFilter }] = useAgQuery<FilterModel>();
  const { pageModel = { page: 1, pageSize: 25 }, sortModel, filter } = query;
  const theme = useTheme();

  const agGridTheme = useMemo(
    () =>
      themeQuartz.withPart(iconSetQuartzLight).withParams({
        backgroundColor: '#ffffff',
        browserColorScheme: 'light',
        columnBorder: { style: 'dashed', width: 1, color: theme.vars.palette.divider },
        textColor: theme.palette.text.primary,
        accentColor: theme.palette.text.disabled,
        fontFamily: {
          ref: 'fontFamily', // Use System Font
        },
        spacing: 6,
        // iconSize: 14,
        wrapperBorder: false,
        wrapperBorderRadius: 0,
        borderRadius: 0,
        sidePanelBorder: false,
        // Header
        // headerBackgroundColor: '#eaeaea',
        headerBackgroundColor: theme.palette.grey.A100,
        headerFontSize: 14,
        headerFontWeight: 600,
        headerTextColor: theme.palette.text.secondary,
        pinnedColumnBorder: { style: 'dashed', width: 1, color: theme.vars.palette.divider },
        // Row
        oddRowBackgroundColor: '#FFF',
        rowBorder: { style: 'dashed', width: 1, color: theme.vars.palette.divider },

        // Overlay
        modalOverlayBackgroundColor: 'rgba(0, 0, 0, 0)',
      }),
    [theme]
  );

  const initialState = useMemo<GridState>(
    () => {
      const columnWidth = localStorage.getItem(gridKey);

      return {
        partialColumnState: true,
        filter: { filterModel: filter },
        sort: sortModel && { sortModel },
        ...(columnWidth && { columnSizing: { columnSizingModel: JSON.parse(columnWidth) } }),
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const loadingOverlayComponentParams = useMemo(() => ({ gridWrapperRef }), []);

  const onGridReady = useCallback((event: GridReadyEvent<TData>) => {}, []);

  const onColumnResized = useCallback(
    (event: ColumnResizedEvent<TData>) => {
      if (event.finished) {
        localStorage.setItem(
          gridKey,
          JSON.stringify(
            event.api.getColumnState().map(({ colId, width, flex }) => ({ colId, width, flex }))
          )
        );
      }
    },
    [gridKey]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFilterChange = useCallback(
    debounce((value) => {
      setFilter(value);
    }, 500),
    [setFilter]
  );

  const onFilterChange = useCallback(
    (event: FilterChangedEvent<TData>) => {
      const currentFilterModel = event.api.getFilterModel();
      if (!isEqual(currentFilterModel, filter)) {
        debouncedFilterChange(currentFilterModel);
      }
    },
    [filter, debouncedFilterChange]
  );

  const onSortChanged = useCallback(
    ({ api }: SortChangedEvent<TData>) => {
      const colState = api.getColumnState();
      const sortState = colState
        .filter((s) => s.sort)
        .sort((a, b) => a.sortIndex! - b.sortIndex!)
        .map((s) => ({ colId: s.colId, sort: s.sort! }));
      if (!isEqual(sortState, sortModel)) {
        setSort(sortState);
      }
    },
    [sortModel, setSort]
  );

  const onPageChange = useCallback(
    (event: any, newPage: number) => {
      setPage(newPage + 1);
    },
    [setPage]
  );

  const onRowsPerPageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPageSize(parseInt(event.target.value, 10));
    },
    [setPageSize]
  );

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Box flexGrow={1} ref={gridWrapperRef}>
        <AgGridReact<TData>
          {...restProps}
          ref={gridRef}
          modules={[...(modules ?? []), ClientSideRowModelModule, SetFilterModule]}
          theme={agGridTheme}
          initialState={initialState}
          onGridReady={onGridReady}
          onColumnResized={onColumnResized}
          onFilterChanged={onFilterChange}
          onSortChanged={onSortChanged}
          pagination={false} // Explicitly disable pagination
          loadingOverlayComponent={SkeletonLoader}
          loadingOverlayComponentParams={loadingOverlayComponentParams}
        />
      </Box>
      {pagination && (
        <Pagination
          count={totalRowCount!}
          page={pageModel.page - 1}
          rowsPerPage={pageModel.pageSize}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </Box>
  );
};
