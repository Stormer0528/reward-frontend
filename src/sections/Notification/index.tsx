import { m } from 'framer-motion';
import { useEffect } from 'react';

import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/useBoolean';

import { varHover } from 'src/components/animate';

import { Content } from './content';
import { useNewNotifications, useFetchNotifications } from './useApollo';

export default function NotificationsDrawer() {
  const drawer = useBoolean();
  const { notifications, fetchNotification } = useFetchNotifications();
  const { newNotification } = useNewNotifications();

  const totalUnRead = notifications.filter((item: any) => item.read === false).length;

  useEffect(() => {
    fetchNotification({ variables: { sort: '-read,createdAt', filter: { read: false } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newNotification]);

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={drawer.onTrue}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <SvgIcon>
            {/* https://icon-sets.iconify.design/solar/bell-bing-bold-duotone/ */}
            <path
              fill="currentColor"
              d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
              opacity="0.5"
            />
            <path
              fill="currentColor"
              d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"
            />
          </SvgIcon>
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 1, maxWidth: 420 } }}
      >
        <Content notifications={notifications} drawer={drawer} totalUnRead={totalUnRead} />
      </Drawer>
    </>
  );
}
