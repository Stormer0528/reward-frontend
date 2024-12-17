import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { formatDateTime } from 'src/utils/format-time';

import { NOTIFICATION_LEVEL } from 'src/consts';
import { NotificationLevel } from 'src/__generated__/graphql';

import { Label } from 'src/components/Label';
import { Iconify } from 'src/components/Iconify';

import { useReadNotifications } from './useApollo';

import type { NotificationClient } from './type';

interface Props {
  notification: Omit<NotificationClient, 'members'>;
}

export function NotificationItem({ notification }: Props) {
  const { id, level, message, read, updatedAt } = notification;

  const { readNotifications } = useReadNotifications();

  const levelColor =
    level === NotificationLevel.Teamleader
      ? 'success'
      : NotificationLevel.Individual
        ? 'primary'
        : 'secondary';

  const handleRead = async () => {
    try {
      await readNotifications({ variables: { data: { id } } });
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <Box
      sx={{ cursor: 'pointer', '&:hover': { bgcolor: (theme) => theme.vars.palette.action.hover } }}
      onClick={handleRead}
    >
      <Stack sx={{ px: 2, pt: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Label variant="soft" color={levelColor}>
              {NOTIFICATION_LEVEL[level]}
            </Label>
            {!read && <Iconify icon="radix-icons:dot-filled" color="red" />}
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            divider={<Iconify icon="bi:dot" color="gray" />}
          >
            <Typography variant="body2" color="dimgray">
              {formatDateTime(updatedAt)}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={{
            p: 1.5,
            my: 1.5,
            borderRadius: 1.5,
            color: 'text.secondary',
          }}
        >
          {reader(message)}
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />
    </Box>
  );
}

// ----------------------------------------------------------------------

function reader(data: string) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: data }}
      sx={{
        mb: 0.5,
        '& p': { typography: 'body2', m: 0 },
        '& a': { color: 'inherit', textDecoration: 'none' },
        '& strong': { typography: 'subtitle2' },
      }}
    />
  );
}
