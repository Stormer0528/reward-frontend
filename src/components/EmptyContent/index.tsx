import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

// ----------------------------------------------------------------------

export type EmptyContentProps = StackProps & {
  title?: string;
  imgUrl?: string;
  filled?: boolean;
  description?: string;
  action?: React.ReactNode;
  slotProps?: {
    img?: SxProps<Theme>;
    title?: SxProps<Theme>;
    description?: SxProps<Theme>;
  };
};

export function EmptyContent({
  sx,
  imgUrl,
  action,
  filled,
  slotProps,
  description,
  title = 'No data',
  ...other
}: EmptyContentProps) {
  return (
    <Stack flexGrow={1} alignItems="center" justifyContent="center" {...other}>
      <Box
        component="img"
        alt="empty content"
        src={imgUrl ?? `${CONFIG.ASSET_DIR}/assets/icons/empty/ic-content.svg`}
        sx={{ width: 1, maxWidth: 160, ...slotProps?.img }}
      />

      {title && (
        <Typography
          variant="h6"
          component="span"
          sx={{ mt: 1, textAlign: 'center', ...slotProps?.title, color: 'text.disabled' }}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          variant="caption"
          sx={{ mt: 1, textAlign: 'center', color: 'text.disabled', ...slotProps?.description }}
        >
          {description}
        </Typography>
      )}

      {action && action}
    </Stack>
  );
}
