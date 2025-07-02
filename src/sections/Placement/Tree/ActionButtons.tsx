import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { Iconify } from 'src/components/Iconify';

import { SearchMiner } from './searchMiner';

interface Props {
  onReset: () => void;
  onMinerChange: (id: string) => void;
}

export function ActionButtons({ onReset, onMinerChange }: Props) {
  return (
    <Box py={2} position="absolute">
      <SearchMiner onMinerChange={onMinerChange} sx={{ position: 'absolute', left: 16 }} />
      <Fab
        component={m.button}
        variant="softExtended"
        color="info"
        onClick={onReset}
        sx={(theme) => ({
          position: 'absolute',
          top: theme.spacing(11),
          left: theme.spacing(2),
        })}
      >
        <Iconify icon="solar:restart-bold" width={24} />
        Reset
      </Fab>
    </Box>
  );
}
