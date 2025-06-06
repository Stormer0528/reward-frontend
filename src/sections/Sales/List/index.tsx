import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';
import type { BasicSale } from 'src/sections/Sales/List/type';

import { useMemo } from 'react';

import Card from '@mui/material/Card';

import { formatID } from 'src/utils/helper';
import { formatDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/formatNumber';

import { AgGrid } from 'src/components/AgGrid';

import { useFetchSales } from 'src/sections/Sales/useApollo';

export default function SaleListView() {
  const { loading, rowCount, sales } = useFetchSales();

  const colDefs = useMemo<ColDef<BasicSale>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 140,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) =>
          formatID(data?.ID ?? '', 'S'),
        cellClass: 'tabular-nums',
      },
      {
        field: 'assetId',
        headerName: 'Asset ID',
        width: 110,
        resizable: true,
        editable: false,
        filter: 'agTextColumnFilter',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'productName',
        headerName: 'Product Name',
        flex: 1,
        minWidth: 200,
        resizable: true,
        editable: false,
        filter: 'agTextColumnFilter',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'paymentMethod',
        headerName: 'Payment Method',
        flex: 1,
        minWidth: 200,
        resizable: true,
        editable: false,
        filter: 'agTextColumnFilter',
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'amount',
        headerName: 'Amount',
        width: 100,
        filter: 'agNumberColumnFilter',
        cellClass: 'tabular-nums ag-right-aligned-cell',
        valueFormatter: ({ value }) => fCurrency(value),
        resizable: true,
        editable: false,
      },
      {
        field: 'token',
        headerName: 'Hash Power',
        width: 130,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
      },
      {
        field: 'point',
        headerName: 'Point',
        width: 90,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
      },
      {
        field: 'orderedAt',
        headerName: 'Ordered At',
        width: 160,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        initialSort: 'desc',
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicSale>) => formatDate(data?.createdAt),
      },
    ],

    []
  );

  return (
    <Card
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
        height: { xs: 'calc(100vh - var(--layout-header-mobile-height) - 20px)', md: 2 },
      }}
    >
      <AgGrid<BasicSale>
        gridKey="sale-list"
        loading={loading}
        rowData={sales}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
