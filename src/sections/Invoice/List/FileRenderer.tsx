import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { Invoice } from './type';

import { memo } from 'react';

import { FileThumbnail } from 'src/components/FileThumbnail';

export const FileRenderer = memo(
  ({ data }: CustomCellRendererProps<Invoice>) => (
    <>
      {data?.invoiceFile && (
        <FileThumbnail
          file="png"
          sx={{ width: 24, cursor: 'pointer' }}
          onClick={() => window.open(data.invoiceFile?.url)}
        />
      )}
    </>
  ),
  (prev, next) => prev.data?.id === next.data?.id
);
