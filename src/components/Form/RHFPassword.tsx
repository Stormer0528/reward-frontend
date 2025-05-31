import type { TextFieldProps } from '@mui/material/TextField';

import { useBoolean } from 'minimal-shared/hooks';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from '../Iconify';

// ----------------------------------------------------------------------

export type RHFPasswordProps = Omit<TextFieldProps, 'type'> & {
  name: string;
};

export function RHFPassword({ name, helperText, slotProps, ...other }: RHFPasswordProps) {
  const { control } = useFormContext();
  const showPassword = useBoolean();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          onBlur={(event) => {
            field.onChange(event.target.value);
          }}
          type={showPassword.value ? 'text' : 'password'}
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={showPassword.onToggle} edge="end">
                    <Iconify
                      icon={showPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            },
            ...slotProps,
            htmlInput: {
              ...slotProps?.htmlInput,
              autoComplete: 'new-password', // Disable autocomplete and autofill
            },
          }}
          {...other}
        />
      )}
    />
  );
}
