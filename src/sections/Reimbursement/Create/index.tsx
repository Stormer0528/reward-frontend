import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { FileRecentItem } from 'src/sections/BugReport/FileRecentItem';

import { Schema } from './schema';
import { useCreteReimbursement } from '../useApollo';
import { FileManagerNewFolderDialog } from './Upload';

import type { SchemaType } from './schema';

export function CreateForm() {
  const router = useRouter();
  const [files, setFiles] = useState<any[]>([]);

  const { createReimbursement } = useCreteReimbursement();

  const defaultValues = {
    amountInCent: 0,
    description: '',
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await createReimbursement({
        ...newData,
        amountInCent: newData.amountInCent * 100,
        fileIds: files.map((file) => file.id),
      });

      if (data) {
        reset();
        toast.success('Reimbursement request created successfully');
        router.push(paths.dashboard.reimbursement.root);
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('amountInCent')) {
          setError('amountInCent', { type: 'manual', message: error?.message || '' });
        }

        if (error.path?.includes('description')) {
          setError('description', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error?.message);
      }
    }
  });

  const handleUpdate = (data: any) => {
    setFiles((prev: any) => [...(prev ?? []), ...data.files]);
  };

  const onDelete = (fileId: string) => {
    setFiles(files?.filter((file) => file.id !== fileId));
  };

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Reimbursement"
        links={[{ name: 'Reimbursement', href: paths.dashboard.reimbursement.root }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container columnSpacing={2}>
          <Grid xs={12} md={8}>
            <Box display="grid" gap={2}>
              <Field.Text type="number" name="amountInCent" label="Amount" required />

              <Field.Text name="description" label="Description" multiline rows={3} required />
            </Box>

            <Stack direction="row" justifyContent="flex-end" mt={2}>
              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={isSubmitting}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Box mb={2}>
              <FileManagerNewFolderDialog handleUpdate={handleUpdate} />
            </Box>
            <Box gap={1} display="flex" flexDirection="column">
              {files?.map((file: any) => (
                <FileRecentItem key={file.id} file={file} onDelete={onDelete} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Form>
    </DashboardContent>
  );
}
