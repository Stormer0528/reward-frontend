import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { CustomUpload } from 'src/components/Upload';

// ----------------------------------------------------------------------

type Props = {
  id?: string;
  preview?: boolean;
  folderName?: string;
  handleUpdate: Function;
  onCreate?: () => void;
  onUpdate?: () => void;
  onChangeFolderName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FileManagerNewFolderDialog({
  id,
  preview = false,
  handleUpdate,
  onCreate,
  onUpdate,
  folderName,
  onChangeFolderName,
}: Props) {
  const [loading, setLoading] = useState<boolean>();
  const [files, setFiles] = useState<(File | string)[]>([]);

  useEffect(() => {
    setFiles([]);
  }, []);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
      setLoading(true);

      const token = localStorage.getItem(CONFIG.STORAGE_TOKEN_KEY);

      const formData = new FormData();

      // Append all accepted files to FormData
      acceptedFiles.forEach((file) => formData.append('attachments', file));

      try {
        if (id) {
          const { data } = await axios.post(
            `${CONFIG.SERVER_HOST}/api/upload/email/${id}/attachments`,
            formData,
            {
              headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
            }
          );

          handleUpdate(data);
        }
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
    </>
  );
}
