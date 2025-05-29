import type { ListItemButtonProps } from '@mui/material/ListItemButton';
import type { Email } from 'src/__generated__/graphql';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { fToNow } from 'src/utils/format-time';


// ----------------------------------------------------------------------

type Props = ListItemButtonProps & {
  mail: Email;
  selected: boolean;
};

export function SentItem({ mail, selected, sx, ...other }: Props) {
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
        {/* <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          sx={{ p: 0, ...sx }}
        >
          <NoSsr fallback={renderFallback}>
            <AnimateAvatar
              slotProps={{
                avatar: { src: mail.to, alt: mail.to },
                overlay: {
                  border: 1,
                  spacing: 2,
                  color: `conic-gradient(${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}, ${theme.vars.palette.primary.main})`,
                },
              }}
            >
              {mail.to?.charAt(0).toUpperCase()}
            </AnimateAvatar>
          </NoSsr>
        </IconButton> */}

        <ListItemText
          primary={mail.to}
          primaryTypographyProps={{ noWrap: true, component: 'span', variant: 'subtitle2' }}
          secondary={mail.subject}
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
        </Stack>
      </ListItemButton>
    </Box>
  );
}
