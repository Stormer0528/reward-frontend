import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { Iconify } from 'src/components/Iconify';

interface Props {
  onReset: () => void;
}

export function ActionButtons({ onReset }: Props) {
  return (
    <Box py={2} position="absolute">
      <Fab
        component={m.button}
        variant="softExtended"
        color="info"
        onClick={onReset}
        sx={(theme) => ({
          position: 'absolute',
          left: theme.spacing(2),
        })}
      >
        <Iconify icon="solar:restart-bold" width={24} />
        Reset
      </Fab>
    </Box>
  );
}
