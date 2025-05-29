import type { BoxProps } from '@mui/material/Box';
import type { SwitchProps } from '@mui/material/Switch';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';

import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { HelperText } from './HelpText';

// ----------------------------------------------------------------------

export type RHFSwitchProps = Omit<FormControlLabelProps, 'control'> & {
  name: string;
  helperText?: React.ReactNode;
  slotProps?: {
    wrapper?: BoxProps;
    switch?: SwitchProps;
    helperText?: FormHelperTextProps;
  };
};

export function RHFSwitch({ name, helperText, label, slotProps, sx, ...other }: RHFSwitchProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box {...slotProps?.wrapper}>
          <FormControlLabel
            label={label}
            control={
              <Switch
                {...field}
                checked={field.value}
                {...slotProps?.switch}
                slotProps={{
                  ...slotProps?.switch?.slotProps,
                  input: {
                    id: `${name}-switch`,
                    ...(!label && { 'aria-label': `${name} switch` }),
                    ...slotProps?.switch?.slotProps?.input,
                  },
                }}
              />
            }
            sx={[{ mx: 0 }, ...(Array.isArray(sx) ? sx : [sx])]}
            {...other}
          />

          <HelperText
            {...slotProps?.helperText}
            errorMessage={error?.message}
            helperText={helperText}
          />
        </Box>
      )}
    />
  );
}
