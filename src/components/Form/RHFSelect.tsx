import type { TextFieldProps } from '@mui/material/TextField';

import { merge } from 'es-toolkit';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';


// ----------------------------------------------------------------------

type RHFSelectProps = TextFieldProps & {
  name: string;
  children: React.ReactNode;
};

export function RHFSelect({
  name,
  children,
  helperText,
  slotProps = {},
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  const labelId = `${name}-select`;

  const baseSlotProps: TextFieldProps['slotProps'] = {
    select: {
      sx: { textTransform: 'capitalize' },
      MenuProps: {
        slotProps: {
          paper: {
            sx: [{ maxHeight: 220 }],
          },
        },
      },
    },
    htmlInput: { id: labelId },
    inputLabel: { htmlFor: labelId },
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={merge(baseSlotProps, slotProps)}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
