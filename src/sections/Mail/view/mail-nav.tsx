import type { IMailLabel } from 'src/types/mail';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';
import { EmptyContent } from 'src/components/EmptyContent';

import { MailNavItem } from './mail-nav-item';

// ----------------------------------------------------------------------

type Props = {
  empty: boolean;
  openNav: boolean;
  labels: IMailLabel[];
  onCloseNav: () => void;
  selectedLabelId: string;
  onToggleCompose: () => void;
  handleClickLabel: (labelId: string) => void;
};

export function MailNav({
  empty,
  labels,
  openNav,
  onCloseNav,
  selectedLabelId,
  onToggleCompose,
  handleClickLabel,
}: Props) {
  const theme = useTheme();

  const renderEmpty = (
    <Stack sx={{ flex: '1 1 auto', px: { xs: 2.5, md: 1.5 } }}>
      <EmptyContent
        title="No labels"
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
            pb: 1.5,
            px: { xs: 1.5, md: 0.5 },
          }}
        >
          {labels.map((label) => (
            <MailNavItem
              key={label.id}
              label={label}
              selected={selectedLabelId === label.id}
              onClickNavItem={() => {
                handleClickLabel(label.id);
              }}
            />
          ))}
        </Box>
      </nav>
    </ScrollBar>
  );

  const renderContent = (
    <>
      <Stack sx={{ p: { xs: 2.5, md: theme.spacing(2, 1.5) } }}>
        <Button
          fullWidth
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="solar:pen-bold" />}
          onClick={onToggleCompose}
        >
          Compose
        </Button>
      </Stack>

      <>{empty ? renderEmpty : renderList}</>
    </>
  );

  return (
    <>
      {renderContent}

      <Drawer
        open={openNav}
        onClose={onCloseNav}
        slotProps={{ backdrop: { invisible: true }, paper: { sx: { width: 280 } } }}
      >
        {renderContent}
      </Drawer>
    </>
  );
}
