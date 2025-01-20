import { useMemo } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LoadingButton from '@mui/lab/LoadingButton';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useContactToAdmin } from './useApollo';
import { Schema, type SchemaType } from './schema';

export default function ContactForm() {
  const defaultValues = useMemo(() => ({ message: '' }), []);

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const { loading, contactToAdmin } = useContactToAdmin();

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await contactToAdmin({ variables: { data: newData } });

      if (data?.contactToAdmin.result === 'success') {
        toast.success('Thank you! Your message has been sent.');
      } else {
        toast.error('Unable to send your message. Please fix errors then try again.');
      }

      reset();
    } catch (error) {
      console.log('error => ', error);
    }
  });
  return (
    <Wrapper>
      <Form methods={methods} onSubmit={onSubmit}>
        <Box rowGap={3} display="grid" sx={{ mb: 3 }}>
          <Field.Text name="name" label="Name" required />
          <Field.Text name="email" label="Email" required />
          <Field.Text name="description" multiline rows={4} />
        </Box>

        <SubmitButon type="submit" variant="contained" fullWidth loading={loading}>
          SUBMIT
        </SubmitButon>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  padding: 30px 0;
`;

const SubmitButon = styled(LoadingButton)`
  background-color: #262262;
  padding: 12px 0;
`;
