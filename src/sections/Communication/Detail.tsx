import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import { ScrollBar } from 'src/components/ScrollBar';

interface Props {
  open: UseBooleanReturn;
  subject: string;
  body: any;
}

export default function Detail({ open, subject, body }: Props) {
  return (
    <Drawer
      open={open.value}
      onClose={() => open.onFalse()}
      anchor="right"
      slotProps={{ backdrop: { invisible: true } }}
      PaperProps={{ sx: { width: 600 } }}
    >
      <ScrollBar
        sx={{
          borderRadius: 1,
          px: 2,
        }}
      >
        <Stack direction="row" sx={{ py: 2 }} spacing={2}>
          <Typography variant="subtitle1">Subject:</Typography>
          <Typography>{subject}</Typography>
        </Stack>

        <div dangerouslySetInnerHTML={{ __html: body }} />
      </ScrollBar>
    </Drawer>
  );
}
