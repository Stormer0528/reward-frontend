import type { BoxProps } from '@mui/material/Box';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';

import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { HelperText } from './HelpText';

// ----------------------------------------------------------------------

type RHFCheckboxProps = Omit<FormControlLabelProps, 'control'> & {
  name: string;
  helperText?: React.ReactNode;
  slotProps?: {
    wrapper?: BoxProps;
    checkbox?: CheckboxProps;
    helperText?: FormHelperTextProps;
  };
};

export function RHFCheckbox({
  sx,
  name,
  label,
  slotProps,
  helperText,
  ...other
}: RHFCheckboxProps) {
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
              <Checkbox
                {...field}
                checked={field.value}
                {...slotProps?.checkbox}
                slotProps={{
                  ...slotProps?.checkbox?.slotProps,
                  input: {
                    id: `${name}-checkbox`,
                    ...(!label && { 'aria-label': `${name} checkbox` }),
                    ...slotProps?.checkbox?.slotProps?.input,
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

// ----------------------------------------------------------------------
