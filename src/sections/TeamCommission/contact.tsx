import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo, useEffect } from 'react';

import { useQuery as useQueryString } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';
import { customizeFullName } from 'src/utils/helper';
import { parseFilterModel } from 'src/utils/parseFilter';

import { type Introducer } from 'src/__generated__/graphql';

import { AgGrid } from 'src/components/AgGrid';

import { ActionRender } from './ActionRenderer';
import { useFetchIntroducers } from './useApollo';

export default function Contact() {
  const [{ page = '1,50', sort = '-createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, rowCount, introducers, fetchIntroducers } = useFetchIntroducers();

  useEffect(() => {
    fetchIntroducers({ variables: { filter: graphQueryFilter, page, sort } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphQueryFilter, page, sort]);

  const colDefs = useMemo<ColDef<Introducer>[]>(
    () => [
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
        field: 'email',
        headerName: 'Email',
        flex: 1,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
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
        field: 'mobile',
        headerName: 'Mobile',
        width: 150,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
      },
      {
        field: 'createdAt',
        headerName: 'Date',
        width: 150,
        filter: 'agDateColumnFilter',
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<Introducer>) =>
          formatDate(data?.createdAt),
      },
      {
        colId: 'action',
        pinned: 'right',
        width: 60,
        resizable: false,
        editable: false,
        sortable: false,
        cellClass: 'ag-cell-center',
        cellRenderer: ActionRender,
      },
    ],

    []
  );

  return (
    <AgGrid<Introducer>
      gridKey="team-commission-contact-list"
      loading={loading}
      rowData={introducers}
      columnDefs={colDefs}
      totalRowCount={rowCount}
    />
  );
}
