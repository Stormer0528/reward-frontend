import type { UseBooleanReturn } from 'minimal-shared/hooks';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
import { ScrollBar } from 'src/components/ScrollBar';

import { useCreateBugReport } from './useAollo';
import { FileRecentItem } from './FileRecentItem';
import { Schema, type SchemaType } from './schema';
import { FileManagerNewFolderDialog } from './Upload';

interface Props {
  open: UseBooleanReturn;
}

export default function ReportModal({ open }: Props) {
  const [files, setFiles] = useState<any[]>([]);

  const { loading, createBugReport } = useCreateBugReport();

  const defaultValues = useMemo<SchemaType>(
    () => ({
      who: '',
      contact: '',
      subject: '',
      description: '',
    }),
    []
  );

  const methods = useForm<SchemaType>({ resolver: zodResolver(Schema), defaultValues });

  const { reset, handleSubmit } = methods;

  const handleUpdate = (data: any) => {
    setFiles((prev: any) => [...(prev ?? []), ...data.files]);
  };

  const onDelete = (fileId: string) => {
    setFiles(files?.filter((file) => file.id !== fileId));
  };

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await createBugReport({
        variables: {
          data: { ...newData, fileIds: files.map((file) => file.id) },
        },
      });

      if (data) {
        toast.success('Successfully reported bug');
        reset();
        setFiles([]);
        open.onFalse();
      }
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <Dialog fullWidth maxWidth="md" open={open.value} onClose={open.onFalse}>
      <ScrollBar
        sx={{
          borderRadius: 1,
        }}
      >
        <DialogTitle>Bug Report</DialogTitle>

        <Form methods={methods} onSubmit={onSubmit}>
          <Box pb={3} px={3}>
            <Box
              mb={2}
              columnGap={2}
              rowGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <Field.Text name="who" label="Name" />
              <Field.Text name="contact" label="Contact" />
            </Box>
            <Stack rowGap={2}>
              <Field.Text name="subject" label="Subject" />
              <Field.Text name="description" label="Description" multiline rows={5} />

              <Grid container spacing={2}>
                <Grid md={3}>
                  <FileManagerNewFolderDialog handleUpdate={handleUpdate} />
                </Grid>
                <Grid md={9}>
                  <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
                    {files?.map((file: any) => (
                      <FileRecentItem key={file.id} file={file} onDelete={onDelete} />
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <LoadingButton type="submit" variant="contained" color="primary" loading={loading}>
                  Report
                </LoadingButton>
                <Button
                  variant="outlined"
                  onClick={() => {
                    open.onFalse();
                    reset();
                  }}
                >
                  Close
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Form>
      </ScrollBar>
    </Dialog>
  );
}
