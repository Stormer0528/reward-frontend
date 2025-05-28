import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'minimal-shared/hooks';

import { Iconify } from 'src/components/Iconify';

interface Props {
  setPassword: (value: string) => void;
}

export default function PasswordContent({ setPassword }: Props) {
  const password = useBoolean();

  return (
    <TextField
      variant="outlined"
      type={password.value ? 'text' : 'password'}
      fullWidth
      label="Confirm Password"
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="solar:user-rounded-bold" width={24} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={password.onToggle} edge="end">
              <Iconify
                icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                width={24}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
