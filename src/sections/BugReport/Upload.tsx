import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { CustomUpload } from 'src/components/Upload';

// ----------------------------------------------------------------------

type Props = {
  preview?: boolean;
  folderName?: string;
  handleUpdate: Function;
  onCreate?: () => void;
  onUpdate?: () => void;
  onChangeFolderName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FileManagerNewFolderDialog({
  preview = false,
  handleUpdate,
  onCreate,
  onUpdate,
  folderName,
  onChangeFolderName,
}: Props) {
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setFiles([]);
  }, []);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
      setLoading(true);

      const token = localStorage.getItem(CONFIG.storageTokenKey);

      const formData = new FormData();

      // Append all accepted files to FormData
      acceptedFiles.forEach((file) => formData.append('payment', file));

      try {
        const { data } = await axios.post(`${CONFIG.SITE_URL}/api/upload`, formData, {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
        });

        handleUpdate(data);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [files]
  );

  const handleRemoveFile = (inputFile: File | string) => {
    const filtered = files.filter((file) => file !== inputFile);
    setFiles(filtered);
  };

  return (
    <>
      {(onCreate || onUpdate) && (
        <TextField
          fullWidth
          label="Folder name"
          value={folderName}
          onChange={onChangeFolderName}
          sx={{ mb: 3 }}
        />
      )}

      <Stack direction="row" spacing={2} alignItems="center">
        <CustomUpload
          preview={preview}
          multiple
          value={files}
          onDrop={handleDrop}
          onRemove={handleRemoveFile}
          accept={{ images: ['.png', '.jpg', '.jpeg'], files: ['.pdf'] }}
        />

        <Stack direction="row" justifyContent="center">
          {loading && <Iconify icon="eos-icons:bubble-loading" />}
        </Stack>
      </Stack>
    </>
  );
}
