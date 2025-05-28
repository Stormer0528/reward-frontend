import type { ColDef, ISetFilterParams } from '@ag-grid-community/core';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { NotificationClient } from './type';

import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';

import { paths } from 'src/routes/paths';
import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { formatDateTime } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';

import { NOTIFICATION_LEVEL } from 'src/consts';
import { DashboardContent } from 'src/layouts/dashboard';

import { Label } from 'src/components/Label';
import { AgGrid } from 'src/components/AgGrid';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { BooleanFormatter } from 'src/components/AgGrid/Renderers/BooleanFormatter';

import { useFetchNotifications, useReadAllNotifications } from './useApollo';

export default function NotificationTable() {
  const [{ page = '1,25', sort = '-read,createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { readAllNotifications } = useReadAllNotifications();
  const { loading, notifications, rowCount, fetchNotification } = useFetchNotifications();

  useEffect(
    () => () => {
      readAllNotifications();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    fetchNotification({ variables: { filter: graphQueryFilter, page, sort } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphQueryFilter, page, sort]);

  const colDefs = useMemo<ColDef<Omit<NotificationClient, 'members'>>[]>(
    () => [
      {
        field: 'level',
        headerName: 'Level',
        width: 200,
        filter: 'agMultiColumnFilter',
        cellRenderer: ({ data }: CustomCellRendererProps<NotificationClient>) =>
          data?.level && NOTIFICATION_LEVEL[data?.level],
      },
      {
        field: 'message',
        headerName: 'Message',
        flex: 1,
        filter: 'agTextColumnFilter',
      },
      {
        field: 'read',
        headerName: 'Read',
        width: 150,
        filter: 'agMultiColumnFilter',
        filterParams: {
          values: ['true', 'false'],
          valueFormatter: BooleanFormatter,
        } as ISetFilterParams<NotificationClient>,
        cellRenderer: ({ data }: CustomCellRendererProps<NotificationClient>) => (
          <Label variant="soft" color={data?.read ? 'success' : 'error'}>
            {data?.read ? 'Read' : 'Unread'}
          </Label>
        ),
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        filter: 'agDateColumnFilter',
        width: 200,
        cellRenderer: ({ data }: CustomCellRendererProps<NotificationClient>) =>
          formatDateTime(data?.createdAt),
      },
    ],
    []
  );

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Notifications"
        links={[
          { name: 'Notifications', href: paths.dashboard.notifications.root },
          { name: 'List' },
        ]}
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
        <AgGrid<Omit<NotificationClient, 'members'>>
          gridKey="notification-list"
          loading={loading}
          rowData={notifications}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </DashboardContent>
  );
}
