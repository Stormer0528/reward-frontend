import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

export function CustomUploadPlaceholder({ ...other }: BoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        color: (theme) => theme.palette.text.disabled,
      }}
      {...other}
    >
      <Iconify icon="eva:cloud-upload-fill" width={28} />
      <Typography>Upload Files</Typography>
    </Box>
  );
}
