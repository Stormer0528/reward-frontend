import { useForm } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';

import { today, customizeDate } from 'src/utils/format-time';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import View from './View';
import { useCalculation } from './useApollo';
import { Schema, type SchemaType } from './schema';
import { useFetchPackages } from '../Sales/useApollo';

export default function EditForm() {
  const defaultValues = useMemo(
    () => ({
      init: 0,
      target: 0,
      joinDate: `${today('YYYY-MM-DD')}`,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const { loading, data, calculateProfitability } = useCalculation();
  const { packages, fetchPackages } = useFetchPackages();

  const onSubmit = handleSubmit(async ({ joinDate, ...rest }) => {
    try {
      await calculateProfitability({
        variables: { data: { ...rest, joinDate: customizeDate(joinDate) } },
      });
    } catch (err) {
      toast.error(err.message);
    }
  });

  useEffect(() => {
    fetchPackages({
      variables: { filter: { status: true, enrollVisibility: true }, sort: '-amount' },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form methods={methods} onSubmit={onSubmit}>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: '50% 20% auto',
          }}
        >
          <Field.Select
            name="init"
            label="Pacakage"
            inputProps={{ sx: { width: 'auto', minWidth: '100%' } }}
          >
            {packages.map((option) => (
              <MenuItem key={option?.id} value={option?.amount}>
                {`$${option?.amount} @ ${option?.productName}`}
              </MenuItem>
            ))}
          </Field.Select>
          <Field.Text type="number" name="target" label="Target ($)" />
          <Field.DatePicker name="joinDate" label="Join Date" format="YYYY-MM-DD" />
        </Box>

        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Calculate
          </LoadingButton>
        </Stack>
      </Form>

      <View loading={loading} data={data} />
    </>
  );
}
