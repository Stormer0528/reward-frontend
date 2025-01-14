import type { Recipient } from 'src/__generated__/graphql';
import type { ListItemButtonProps } from '@mui/material/ListItemButton';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { fToNow } from 'src/utils/format-time';

import { varHover, AnimateAvatar } from 'src/components/animate';

// ----------------------------------------------------------------------

type Props = ListItemButtonProps & {
  mail: Recipient;
  selected: boolean;
};

export function InboxItem({ mail, selected, sx, ...other }: Props) {
  const theme = useTheme();

  const renderFallback = (
    <Avatar
      sx={{
        width: 40,
        height: 40,
        border: `solid 2px ${theme.vars.palette.background.default}`,
      }}
    >
      <SvgIcon>
        <circle cx="12" cy="6" r="4" fill="currentColor" />
        <path
          fill="currentColor"
          d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
          opacity="0.5"
        />
      </SvgIcon>
    </Avatar>
  );

  return (
    <Box component="li" sx={{ display: 'flex' }}>
      <ListItemButton
        disableGutters
        sx={{
          p: 1,
          gap: 2,
          borderRadius: 1,
          ...(selected && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          sx={{ p: 0, ...sx }}
        >
          <NoSsr fallback={renderFallback}>
            <AnimateAvatar
              slotProps={{
                avatar: { src: mail.email?.sender?.username, alt: mail.email?.sender?.username },
                overlay: {
                  border: 1,
                  spacing: 2,
                  color: `conic-gradient(${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}, ${theme.vars.palette.primary.main})`,
                },
              }}
            >
              {mail.email?.sender?.username?.charAt(0).toUpperCase()}
            </AnimateAvatar>
          </NoSsr>
        </IconButton>

        <ListItemText
          primary={mail.email?.sender?.username}
          primaryTypographyProps={{ noWrap: true, component: 'span', variant: 'subtitle2' }}
          secondary={mail.email?.subject}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: 'body2',
            color: 'text.secondary',
          }}
        />

        <Stack alignItems="flex-end" sx={{ alignSelf: 'stretch' }}>
          <Typography
            noWrap
            variant="body2"
            component="span"
            sx={{ mb: 1.5, fontSize: 12, color: 'text.disabled' }}
          >
            {fToNow(mail.updatedAt)}
          </Typography>

          {!mail.isRead && (
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'info.main',
              }}
            />
          )}
        </Stack>
      </ListItemButton>
    </Box>
  );
}
