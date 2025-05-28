import type { UploadProps } from './types';

import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import Box from '@mui/material/Box';

import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/Image';
import { Iconify } from 'src/components/Iconify';

import { RejectionFiles } from './components/rejection-files';

// ----------------------------------------------------------------------

export function UploadAvatar({
  sx,
  error,
  value,
  current,
  disabled,
  helperText,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    disabled,
    accept: { 'image/*': [] },
    ...other,
  });

  const hasFile = !!value;

  const hasError = isDragReject || !!error;

  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (typeof value === 'string') {
      setPreview(value);
    } else if (value instanceof File) {
      setPreview(URL.createObjectURL(value));
    }
  }, [value]);

  const renderPreview = hasFile && (
    <Image alt="avatar" src={preview} sx={{ width: 1, height: 1, borderRadius: '50%' }} />
  );

  const renderPlaceholder = (
    <Box
      className="upload-placeholder"
      sx={{
        top: 0,
        gap: 1,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 9,
        display: 'flex',
        borderRadius: '50%',
        position: 'absolute',
        alignItems: 'center',
        color: 'text.disabled',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        transition: (theme) =>
          theme.transitions.create(['opacity'], { duration: theme.transitions.duration.shorter }),
        '&:hover': { opacity: 0.72 },
        ...(hasError && {
          color: 'error.main',
          bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
        }),
        ...(hasFile && {
          zIndex: 9,
          opacity: 0,
          color: 'common.white',
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['900Channel'], 0.64),
        }),
      }}
    >
      {current && !hasFile ? (
        <Image src={current} />
      ) : (
        <Iconify icon="solar:camera-add-bold" width={32} />
      )}
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'relative',
      }}
    >
      {renderPreview}
      {renderPlaceholder}
    </Box>
  );

  return (
    <>
      <Box
        {...getRootProps()}
        sx={{
          p: 0.5,
          m: 'auto',
          width: 144,
          height: 144,
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: '50%',
          border: (theme) => `1px dashed ${varAlpha(theme.vars.palette.grey['500Channel'], 0.8)}`,
          ...(isDragActive && { opacity: 0.72 }),
          ...(disabled && { opacity: 0.48, pointerEvents: 'none' }),
          ...(hasError && { borderColor: 'error.main' }),
          ...(hasFile && {
            ...(hasError && {
              bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
            }),
            '&:hover .upload-placeholder': { opacity: 1 },
          }),
          ...sx,
        }}
      >
        <input {...getInputProps()} />

        {renderContent}
      </Box>

      {helperText && helperText}

      <RejectionFiles files={fileRejections} />
    </>
  );
}
