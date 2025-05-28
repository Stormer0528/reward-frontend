import type { NotificationClient } from './type';
import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { useReadAllNotifications } from './useApollo';
import { NotificationItem } from './notification-item';

interface Props {
  drawer: UseBooleanReturn;
  totalUnRead: number;
  notifications: Omit<NotificationClient, 'members'>[];
}

export function Content({ drawer, notifications, totalUnRead }: Props) {
  const { readAllNotifications } = useReadAllNotifications();

  const handleMarkAllAsRead = async () => {
    try {
      await readAllNotifications({
        awaitRefetchQueries: true,
        refetchQueries: ['Notifications'],
      });
    } catch (error) {
      console.log('error => ', error);
    }
  };

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Notifications
        </Typography>

        {!!totalUnRead && (
          <Tooltip title="Mark all as read">
            <IconButton color="primary" onClick={handleMarkAllAsRead}>
              <Iconify icon="eva:done-all-fill" />
            </IconButton>
          </Tooltip>
        )}

        <IconButton onClick={drawer.onFalse} sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Stack>

      <ScrollBar>
        <Box sx={{ bgcolor: 'background.neutral' }}>
          {notifications?.map((notification) => <NotificationItem notification={notification} />)}
          <Box sx={{ px: 3, py: 2 }}>
            <Link sx={{ cursor: 'pointer' }} href={paths.dashboard.notifications.root}>
              Show all notifications
            </Link>
          </Box>
        </Box>
      </ScrollBar>
    </>
  );
}
