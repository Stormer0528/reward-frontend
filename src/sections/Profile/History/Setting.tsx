import type { UseBooleanReturn } from 'src/hooks/useBoolean';
import type { Setting as SettingType } from 'src/__generated__/graphql';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { Schema, type SchemaType } from './schema';
import { useUpdateSettingMember } from '../useApollo';

interface Props {
  open: UseBooleanReturn;
  setting: SettingType;
}

export default function Setting({ open, setting }: Props) {
  const defaultValues: SchemaType = useMemo(
    () =>
      setting
        ? (Schema.safeParse({ communication: setting.communication })?.data ?? ({} as SchemaType))
        : {
            communication: true,
          },
    [setting]
  );

  const { loading, updateSettingMember } = useUpdateSettingMember();

  const methods = useForm<SchemaType>({ resolver: zodResolver(Schema), defaultValues });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      const { data } = await updateSettingMember({ variables: { data: newData } });

      if (data) {
        toast.success('Successfully updated settings!');
        open.onFalse();
      }
    } catch (error) {
      toast.error(`Failed to update settings: ${error.message}`);
    }
  });

  return (
    <Dialog fullWidth maxWidth="xs" open={open.value} onClose={open.onFalse}>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Setting</DialogTitle>
        <DialogContent>
          <Field.Switch name="communication" label="Communication" />
        </DialogContent>
        <DialogActions>
          <LoadingButton loading={loading} type="submit" variant="contained" color="primary">
            Save
          </LoadingButton>
          <Button variant="outlined" onClick={open.onFalse}>
            Close
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
