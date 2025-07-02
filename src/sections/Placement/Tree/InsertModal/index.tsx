import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { PlacementPosition } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
import SearchMiner from 'src/components/SearchMiner';

import { Schema } from './schema';
import { useAddPlacementChild } from '../../useApollo';

import type { SchemaType } from './schema';

interface Props {
  id: string;
  open: UseBooleanReturn;
}

export function InsertModal({ id, open }: Props) {
  const [memberId, setMemberId] = useState<string>('');

  const defaultValues = { position: PlacementPosition.Left };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const { loading, addPlacementChild } = useAddPlacementChild();

  const onSubmit = handleSubmit(async ({ position }) => {
    try {
      const { data } = await addPlacementChild({
        childId: memberId,
        parentId: id,
        position,
      });

      if (data) {
        toast.success('Successfully done!');
        open.onFalse();
        reset();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  });

  return (
    <Dialog
      open={open.value}
      onClose={() => {
        open.onFalse();
        reset();
      }}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>Add Child</DialogTitle>
      <DialogContent>
        <Form methods={methods} onSubmit={onSubmit}>
          <Box
            py={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
            }}
          >
            <SearchMiner
              label="Child"
              setMemberId={setMemberId}
              filter={{ placementParentId: null }}
            />

            <Field.Select name="position" label="Position">
              {Object.keys(PlacementPosition).map((key) => (
                <MenuItem
                  key={key}
                  value={PlacementPosition[key as keyof typeof PlacementPosition]}
                >
                  {key}
                </MenuItem>
              ))}
            </Field.Select>
          </Box>

          <Stack direction="row" justifyContent="flex-end" mt={1} mb={3}>
            <LoadingButton type="submit" variant="contained" color="success" loading={loading}>
              Add
            </LoadingButton>
          </Stack>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
