import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Portal from '@mui/material/Portal';
import Backdrop from '@mui/material/Backdrop';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/useBoolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { varAlpha } from 'src/theme/styles';

import { Editor } from 'src/components/editor';
import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { FileRecentItem } from './FileRecentItem';
import { FileManagerNewFolderDialog } from './Upload';
import { useSendEmail, useCreateEmail, useUpdateEmail } from '../useApollo';

// ----------------------------------------------------------------------

const POSITION = 20;

type Props = {
  onCloseCompose: () => void;
};

export function MailCompose({ onCloseCompose }: Props) {
  const smUp = useResponsive('up', 'sm');

  const fullScreen = useBoolean();

  const [id, setId] = useState<string>();
  const [to, setTo] = useState<string>('');
  const [files, setFiles] = useState<string[]>();
  const [message, setMessage] = useState<any>('');
  const [subject, setSubject] = useState<string>('');
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [previousUpdate, setPreviousUpdate] = useState<boolean>(false);

  const { sendEmail } = useSendEmail();
  const { createEmail } = useCreateEmail();
  const { updateEmail } = useUpdateEmail();

  const onDelete = (fileId: string) => {
    setFiles(files?.filter((file: any) => fileId !== file.id));
  };

  const handleChangeMessage = useCallback((value: string) => {
    setMessage(value);
    setIsUpdate(true);
  }, []);

  const handleChangeTo = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTo(event.target.value);
      setIsUpdate(true);
    },
    []
  );

  const handleChangeSubject = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSubject(event.target.value);
      setIsUpdate(true);
    },
    []
  );

  const handleSend = async () => {
    if (to.length === 0 || subject.length === 0) {
      toast.warning('Recipient and Subject is required');
      return;
    }

    if (id) {
      const { data } = await sendEmail({ variables: { data: { id } } });

      if (data) {
        toast.success('Successfully sent!');
        onCloseCompose();
      }
    }
  };

  const handleUpload = (data: any) => {
    setFiles((prev) => [...(prev ?? []), ...data.files]);
  };

  useEffect(() => {
    console.log('files => ', files);
    const handleCreate = async () => {
      try {
        const { data } = await createEmail({
          variables: {
            data: { subject, body: message, to, fileIds: files?.map((item: any) => item.id) },
          },
        });

        setId(data?.createEmail.id);
      } catch (error) {
        console.log('error => ', error);
      }
    };

    const handleUpdate = async () => {
      try {
        if (id) {
          updateEmail({
            variables: {
              data: { id, subject, body: message, to, fileIds: files?.map((item: any) => item.id) },
            },
          });
        }
      } catch (error) {
        console.log('error => ', error);
      }
    };

    if (!previousUpdate && isUpdate) {
      handleCreate();
    } else if (previousUpdate && isUpdate) {
      handleUpdate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate, to, subject, message]);

  useEffect(() => {
    setTimeout(() => {
      if (isUpdate) {
        setPreviousUpdate(true);
      }
    }, 10);
  }, [isUpdate]);

  return (
    <Portal>
      {(fullScreen.value || !smUp) && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal - 1 }} />
      )}

      <Paper
        sx={{
          maxWidth: 560,
          right: POSITION,
          borderRadius: 2,
          display: 'flex',
          bottom: POSITION,
          position: 'fixed',
          overflow: 'hidden',
          flexDirection: 'column',
          zIndex: (theme) => theme.zIndex.modal,
          width: `calc(100% - ${POSITION * 2}px)`,
          boxShadow: (theme) => theme.customShadows.dropdown,
          ...(fullScreen.value && {
            maxWidth: 1,
            height: `calc(100% - ${POSITION * 2}px)`,
          }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ bgcolor: 'background.neutral', p: (theme) => theme.spacing(1.5, 1, 1.5, 2) }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            New message
          </Typography>

          <IconButton onClick={fullScreen.onToggle}>
            <Iconify icon={fullScreen.value ? 'eva:collapse-fill' : 'eva:expand-fill'} />
          </IconButton>

          <IconButton onClick={onCloseCompose}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        </Stack>

        <InputBase
          placeholder="To"
          sx={{
            px: 2,
            height: 48,
            borderBottom: (theme) =>
              `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
          }}
          onChange={handleChangeTo}
        />

        <InputBase
          placeholder="Subject"
          sx={{
            px: 2,
            height: 48,
            borderBottom: (theme) =>
              `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
          }}
          onChange={handleChangeSubject}
        />

        <Stack
          spacing={2}
          flexGrow={1}
          sx={{
            p: 2,
            flex: '1 1 auto',
            overflow: 'hidden',
          }}
        >
          <Editor
            value={message}
            onChange={handleChangeMessage}
            placeholder="Type a message"
            slotProps={{
              wrap: {
                ...(fullScreen.value && { minHeight: 0, flex: '1 1 auto' }),
              },
            }}
            sx={{
              maxHeight: 480,
              ...(fullScreen.value && { maxHeight: 1, flex: '1 1 auto' }),
            }}
          />

          <Stack rowGap={1}>
            <FileManagerNewFolderDialog id={id} handleUpdate={handleUpload} />

            <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column', mt: 1 }}>
              {files?.map((file: any) => (
                <FileRecentItem key={file.id} file={file} onDelete={onDelete} />
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              endIcon={<Iconify icon="iconamoon:send-fill" />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Portal>
  );
}
