import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import Stack from '@mui/material/Stack';

import { FileThumbnail } from 'src/components/FileThumbnail';

import type { BasicReimbursement } from './type';

export const FileRenderer = memo(
  ({ data }: CustomCellRendererProps<BasicReimbursement>) => (
    <Stack direction="row">
      {data?.attachments?.map((item) => (
        <FileThumbnail
          file={item.mimeType.split('/')[1]}
          sx={{ width: 24, cursor: 'pointer' }}
          onClick={() => window.open(item.url)}
        />
      ))}
    </Stack>
  ),
  (prev, next) => prev.data?.id === next.data?.id
);
