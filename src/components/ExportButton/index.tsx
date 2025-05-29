import axios from 'axios';
import { useState } from 'react';

import Button from '@mui/material/Button';

import { fDate, fTime } from 'src/utils/format-time';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';

interface Props {
  target: string;
  token: string;
}

export default function ExportButton({ target, token }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleExport = async () => {
    setLoading(true);

    const { data } = await axios.get(`${CONFIG.SERVER_BASE}/api/export-${target}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer',
    });

    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${target}-${fDate(new Date(), 'YYYYMMDD')}${fTime(new Date(), 'hhmmss')}.xlsx`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setLoading(false);
  };

  return (
    <Button
      variant="text"
      startIcon={<Iconify icon="uil:export" />}
      loading={loading}
      onClick={handleExport}
    >
      Export
    </Button>
  );
}
