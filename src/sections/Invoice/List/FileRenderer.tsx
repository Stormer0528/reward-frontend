import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { Invoice } from './type';

import { memo } from 'react';

import Stack from '@mui/material/Stack';

import { FileThumbnail } from 'src/components/FileThumbnail';

export const FileRenderer = memo(
  ({ data }: CustomCellRendererProps<Invoice>) => (
    <Stack direction="row">
      <FileThumbnail
        file="png"
        sx={{ width: 24, cursor: 'pointer' }}
        onClick={() => window.open(data?.invoiceFile?.url)}
      />
    </Stack>
  ),
  (prev, next) => prev.data?.id === next.data?.id
);
