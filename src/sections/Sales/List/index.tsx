import type { Sale } from 'src/sections/Sales/List/type';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';

import { paths } from 'src/routes/paths';

import { formatID } from 'src/utils/helper';
import { formatDate } from 'src/utils/format-time';

import { DashboardContent } from 'src/layouts/dashboard';

import { AgGrid } from 'src/components/AgGrid';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { useFetchSales } from 'src/sections/Sales/useApollo';

export default function SaleListView() {
  const { loading, rowCount, sales } = useFetchSales();

  const colDefs = useMemo<ColDef<Sale>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 140,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<Sale>) => formatID(data?.ID ?? '', 'S'),
        cellClass: 'ag-number-cell',
      },
      {
        field: 'member.assetId',
        headerName: 'Asset ID',
        width: 110,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'package.productName',
        headerName: 'ProductName',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'paymentMethod',
        headerName: 'Payment Method',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'package.amount',
        headerName: 'Amount',
        width: 100,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
      },
      {
        field: 'package.token',
        headerName: 'Hash Power',
        width: 130,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
      },
      {
        field: 'package.point',
        headerName: 'Point',
        width: 90,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
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
        cellRenderer: ({ data }: CustomCellRendererProps<Sale>) => formatDate(data?.createdAt),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Sale"
        links={[{ name: 'Sale', href: paths.dashboard.sales.root }, { name: 'List' }]}
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
        <AgGrid<Sale>
          gridKey="sale-list"
          loading={loading}
          rowData={sales}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </DashboardContent>
  );
}
