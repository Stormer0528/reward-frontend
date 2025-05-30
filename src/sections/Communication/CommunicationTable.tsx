import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, IDateFilterParams, ITextFilterParams } from '@ag-grid-community/core';

import { useMemo } from 'react';

import Card from '@mui/material/Card';

import { formatDate } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';
import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

import { ActionRender } from './ActionRenderer';

import type { CampaignMember } from './type';

export default function CommunicationTable() {
  const { user } = useAuthContext();

  const colDefs = useMemo<ColDef<CampaignMember>[]>(
    () => [
      {
        field: 'subject',
        headerName: 'Subject',
        width: 600,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'sender',
        headerName: 'Sender',
        width: 200,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'sentTime',
        headerName: 'Sent At',
        width: 200,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<CampaignMember>) =>
          formatDate(data?.sentTime),
      },
      {
        field: 'openTime',
        headerName: 'Opened At',
        width: 200,
        filter: 'agDateColumnFilter',
        filterParams: {
          buttons: ['reset'],
          defaultOption: 'greaterThan',
          filterOptions: ['greaterThan', 'lessThan', 'equals', 'notEqual'],
        } as IDateFilterParams,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<CampaignMember>) =>
          data?.openTime ? formatDate(data?.openTime) : 'Not opened yet',
      },
      {
        headerName: 'Status',
        flex: 1,
        filter: false,
        resizable: true,
        editable: false,
        cellRenderer: ({ data }: CustomCellRendererProps<CampaignMember>) => (
          <Iconify
            icon={data?.open ? 'akar-icons:double-check' : 'lucide:check'}
            color={data?.sent ? 'green' : '#999999'}
            mt={0.8}
          />
        ),
      },
      {
        colId: 'action',
        width: 50,
        resizable: false,
        editable: false,
        sortable: false,
        pinned: 'right',
        cellClass: 'ag-action-cell',
        cellRenderer: ActionRender,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return (
    <Card
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <AgGrid<CampaignMember>
        gridKey="member-communication-list"
        rowData={user?.communications}
        columnDefs={colDefs}
        totalRowCount={user?.communications?.length}
      />
    </Card>
  );
}
