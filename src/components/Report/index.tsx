import type { FabProps } from '@mui/material/Fab';

import Fab from '@mui/material/Fab';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';

import ReportModal from 'src/sections/BugReport';

// ----------------------------------------------------------------------

export type BackToTopProps = FabProps & {
  value?: number;
};

export default function Report({ value = 90, sx, ...other }: BackToTopProps) {
  const open = useBoolean();

  return (
    <>
      <Fab
        aria-label="Back to top"
        onClick={open.onTrue}
        color="secondary"
        sx={{
          width: 48,
          height: 48,
          position: 'fixed',
          right: 16,
          bottom: 16,
          zIndex: (theme) => theme.zIndex.speedDial,
          transition: (theme) => theme.transitions.create(['transform']),
          ...sx,
        }}
        {...other}
      >
        <Iconify width={24} icon="tabler:report" />
      </Fab>

      <ReportModal open={open} />
    </>
  );
}
