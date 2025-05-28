import type { Invoice } from './type';
import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';

import { InvoiceStatusEnum } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { FileRecentItem } from './FileRecentItem';

interface Props {
  open: UseBooleanReturn;
  row: Invoice;
}

export default function Detail({ open, row }: Props) {
  const { name, status, description, invoiceFile, createdAt } = row;

  return (
    <Drawer
      open={open.value}
      onClose={() => open.onFalse()}
      anchor="right"
      slotProps={{ backdrop: { invisible: true } }}
      PaperProps={{ sx: { width: 400 } }}
    >
      <ScrollBar
        sx={{
          borderRadius: 1,
        }}
      >
        <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
          <Typography variant="h6">{name}</Typography>
          <Stack direction="row" spacing={1}>
            <Typography>
              {status === InvoiceStatusEnum.Paid ? (
                <Iconify icon="mdi:receipt-text-pending" color="green" />
              ) : (
                <Iconify icon="lets-icons:check-fill" color="yellow" />
              )}
            </Typography>
            <Typography>{status === InvoiceStatusEnum.Pending ? 'Pending' : 'Paid'}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1} sx={{ p: 2.5, bgcolor: 'background.neutral' }}>
          <Typography variant="subtitle1">Info</Typography>

          <Stack direction="row" columnGap={2}>
            <Typography variant="body2" color="text.disabled">
              Description:
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Stack>

          <Stack direction="row" columnGap={2}>
            <Typography variant="body2" color="text.disabled">
              Created At:
            </Typography>
            <Typography variant="body2">{formatDate(createdAt)}</Typography>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

          <Typography variant="subtitle1">Files</Typography>

          <FileRecentItem key={invoiceFile?.id!} file={invoiceFile as any} />
        </Stack>
      </ScrollBar>
    </Drawer>
  );
}
