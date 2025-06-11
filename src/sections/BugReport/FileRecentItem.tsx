import type { PaperProps } from '@mui/material/Paper';
import type { IFileManager } from 'src/types/file';

import axios from 'axios';
import { useState } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { fData } from 'src/utils/formatNumber';
import { fDateTime } from 'src/utils/format-time';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { FileThumbnail } from 'src/components/FileThumbnail';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  file: IFileManager;
  onDelete: (FileId: string) => void;
};

export function FileRecentItem({ file, onDelete, sx, ...other }: Props) {
  const details = useBoolean();
  const [loading, setLoading] = useState<boolean>(false);

  const fileType = file.mimeType.split('/')[1];

  const renderText = (
    <ListItemText
      onClick={details.onTrue}
      primary={file.originalName}
      secondary={
        <>
          {fData(file.size)}
          <Box
            sx={{
              mx: 0.75,
              width: 2,
              height: 2,
              borderRadius: '50%',
              bgcolor: 'currentColor',
            }}
          />
          {fDateTime(file.updatedAt)}
        </>
      }
      slotProps={{
        primary: { noWrap: true, typography: 'subtitle2' },
        secondary: {
          mt: 0.5,
          component: 'span',
          alignItems: 'center',
          typography: 'caption',
          color: 'text.disabled',
          display: 'inline-flex',
        },
      }}
    />
  );

  const handleExport = async (fileData: any) => {
    setLoading(true);

    const token = localStorage.getItem(CONFIG.STORAGE_TOKEN_KEY);

    const { data } = await axios.get(`${fileData.url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer',
    });

    const blob = new Blob([data], { type: fileType });
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
    <Paper
      variant="outlined"
      sx={{
        gap: 2,
        borderRadius: 1,
        display: 'flex',
        cursor: 'pointer',
        position: 'relative',
        bgcolor: 'transparent',
        p: { xs: 2.2, sm: 1.8 },
        py: { xs: 1, sm: 0.7 },
        alignItems: { xs: 'unset', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z20,
        },
        opacity: loading ? 0.5 : 1,
        ...sx,
      }}
      onClick={() => handleExport(file)}
      {...other}
    >
      <FileThumbnail file={file.mimeType.split('/')[1]} />

      {renderText}

      {loading && <Iconify icon="eos-icons:bubble-loading" />}

      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(file.id);
        }}
      >
        <Iconify icon="mingcute:close-line" width={16} />
      </IconButton>
    </Paper>
  );
}
