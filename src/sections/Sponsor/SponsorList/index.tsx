import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';
import type { Introducer } from './type';

import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';
import { formatID, customizeFullName } from 'src/utils/helper';

import { AgGrid } from 'src/components/AgGrid';

import { useFetchSponsors } from 'src/sections/TeamCommission/useApollo';

interface Props {
  filter: any;
}

export default function SPonsorListView({ filter: customFilter }: Props) {
  const { loading, introducers, rowCount, fetchSponsors } = useFetchSponsors();
  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(
    () => parseFilterModel({ ...customFilter }, filter),
    [filter, customFilter]
  );

  useEffect(() => {
    fetchSponsors({ variables: { filter: graphQueryFilter, page, sort } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page, sort]);

  const colDefs = useMemo<ColDef<Introducer>[]>(
    () => [
      {
        field: 'ID',
        headerName: 'ID',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) => formatID(data?.ID ?? ''),
      },
      {
        field: 'username',
        headerName: 'Username',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'fullName',
        headerName: 'Full Name',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) =>
          customizeFullName(data?.fullName ?? ''),
      },
      {
        field: 'point',
        headerName: 'Point',
        width: 200,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 250,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) =>
          formatDate(data?.createdAt),
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
      }}
    >
      <AgGrid<Introducer>
        gridKey="miner-sponsor-list"
        loading={loading}
        rowData={introducers}
        columnDefs={colDefs}
        totalRowCount={rowCount}
      />
    </Card>
  );
}
