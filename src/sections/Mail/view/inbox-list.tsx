import type { Recipient } from 'src/__generated__/graphql';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';

import { CONFIG } from 'src/config';

// import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';
import { EmptyContent } from 'src/components/EmptyContent';

import { InboxItem } from './inbox-item';
import { MailItemSkeleton } from './mail-skeleton';

// ----------------------------------------------------------------------

type Props = {
  empty: boolean;
  loading: boolean;
  openMail: boolean;
  emails: Recipient[];
  selectedMailId: string;
  selectedLabelId: string;
  onCloseMail: () => void;
  onClickMail: (id: string, emailId: string) => void;
};

export function InboxList({
  empty,
  emails,
  loading,
  openMail,
  onCloseMail,
  onClickMail,
  selectedMailId,
  selectedLabelId,
}: Props) {
  const renderLoading = (
    <Stack sx={{ px: 2, flex: '1 1 auto' }}>
      <MailItemSkeleton />
    </Stack>
  );

  const renderEmpty = (
    <Stack sx={{ px: 2, flex: '1 1 auto' }}>
      <EmptyContent
        title={`Nothing in ${selectedLabelId}`}
        description="This folder is empty"
        imgUrl={`${CONFIG.ASSET_DIR}/assets/icons/empty/ic-folder-empty.svg`}
      />
    </Stack>
  );

  const renderList = (
    <ScrollBar sx={{ flex: '1 1 0' }}>
      <nav>
        <Box
          component="ul"
          sx={{
            px: 2,
            pb: 1,
            gap: 0.5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {emails.map((mail: Recipient) => (
            <InboxItem
              key={mail.id}
              mail={mail}
              selected={selectedMailId === mail.id}
              onClick={() => {
                onClickMail(mail.id, mail.emailId);
              }}
            />
          ))}
        </Box>
      </nav>
    </ScrollBar>
  );

  const renderContent = (
    <>
      <Stack sx={{ p: 2 }}>
        {/* {mdUp ? (
          <TextField
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
            {selectedLabelId}
          </Typography>
        )} */}
      </Stack>

      {loading ? renderLoading : <>{empty ? renderEmpty : renderList}</>}
    </>
  );

  return (
    <>
      {renderContent}

      <Drawer
        open={openMail}
        onClose={onCloseMail}
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        {renderContent}
      </Drawer>
    </>
  );
}
