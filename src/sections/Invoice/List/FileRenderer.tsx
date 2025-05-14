import type { CustomCellRendererProps } from '@ag-grid-community/react';

import axios from 'axios';
import { memo, useState } from 'react';

import Stack from '@mui/material/Stack';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { FileThumbnail } from 'src/components/FileThumbnail';

import type { Invoice } from './type';

export const FileRenderer = memo(
  ({ data }: CustomCellRendererProps<Invoice>) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleExport = async (fileData: any, fileType: string) => {
      setLoading(true);

      const token = localStorage.getItem(CONFIG.storageTokenKey);

      const { data: file } = await axios.get(`${fileData.url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'arraybuffer',
      });

      const blob = new Blob([file], { type: fileType });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileData.originalName}`;

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setLoading(false);
    };

    return (
      <Stack direction="row">
        <FileThumbnail
          file="png"
          sx={{ width: 24, cursor: 'pointer' }}
          onClick={() => handleExport(data?.invoiceFile, data?.invoiceFile?.mimeType!)}
        />

        {loading && <Iconify icon="eos-icons:bubble-loading" sx={{ mt: 1 }} />}
      </Stack>
    );
  },
  (prev, next) => prev.data?.id === next.data?.id
);
