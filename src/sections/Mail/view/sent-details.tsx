import type { IMailLabel } from 'src/types/mail';
import type { Email } from 'src/__generated__/graphql';

import { m } from 'framer-motion';

import NoSsr from '@mui/material/NoSsr';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { darken, lighten, useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { fDateTime } from 'src/utils/format-time';
import { customizeFullName } from 'src/utils/helper';

import { CONFIG } from 'src/config';

import { Label } from 'src/components/Label';
// import { Editor } from 'src/components/editor';
import { Iconify } from 'src/components/Iconify';
import { Markdown } from 'src/components/Markdown';
import { ScrollBar } from 'src/components/ScrollBar';
import { EmptyContent } from 'src/components/EmptyContent';
import { LoadingScreen } from 'src/components/loading-screen';
import { varHover, AnimateAvatar } from 'src/components/animate';

import { FileRecentItem } from './FileRecentItem';

// ----------------------------------------------------------------------

type Props = {
  mail?: Email;
  empty: boolean;
  loading: boolean;
  renderLabel: (id: string) => IMailLabel;
  handleMoveTrash: Function;
};

export function SentDetails({ mail, renderLabel, handleMoveTrash, empty, loading }: Props) {
  const theme = useTheme();

  if (loading) {
    return <LoadingScreen />;
  }

  if (empty || !mail) {
    return (
      <EmptyContent
        title="No conversation selected"
        description="Select a conversation to read"
        imgUrl={`${CONFIG.ASSET_DIR}/assets/icons/empty/ic-email-selected.svg`}
      />
    );
  }

  const temp: any[] = [];

  const renderHead = (
    <>
      <Stack direction="row" spacing={1} flexGrow={1}>
        {temp.map((labelId: any) => {
          const label = renderLabel(labelId);

          return label ? (
            <Label
              key={label.id}
              sx={{
                color: darken(label.color, 0.24),
                bgcolor: hexAlpha(label.color, 0.16),
                ...theme.applyStyles('dark', { color: lighten(label.color, 0.24) }),
              }}
            >
              {label.name}
            </Label>
          ) : null;
        })}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Tooltip title="Mark Unread">
          <IconButton>
            <Iconify icon="fluent:mail-unread-20-filled" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Trash">
          <IconButton onClick={() => handleMoveTrash(mail.id)}>
            <Iconify icon="solar:trash-bin-trash-bold" />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );

  const renderSubject = (
    <>
      <Typography
        variant="subtitle2"
        sx={{ ...theme.mixins.maxLine({ line: 2 }), flex: '1 1 auto' }}
      >
        Re: {mail.subject}
      </Typography>

      <Stack spacing={0.5}>
        {/* <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <IconButton size="small">
            <Iconify width={18} icon="solar:reply-bold" />
          </IconButton>

          <IconButton size="small">
            <Iconify width={18} icon="solar:forward-bold" />
          </IconButton>
        </Stack> */}

        <Typography variant="caption" noWrap sx={{ color: 'text.disabled' }}>
          {fDateTime(mail.updatedAt)}
        </Typography>
      </Stack>
    </>
  );

  const renderFallback = (
    <Avatar
      sx={{
        width: 40,
        height: 40,
        border: `solid 2px ${theme.vars.palette.background.default}`,
      }}
    >
      <SvgIcon>
        <circle cx="12" cy="6" r="4" fill="currentColor" />
        <path
          fill="currentColor"
          d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
          opacity="0.5"
        />
      </SvgIcon>
    </Avatar>
  );

  const renderSender = (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        sx={{ p: 0, mr: 2 }}
      >
        <NoSsr fallback={renderFallback}>
          <AnimateAvatar
            slotProps={{
              avatar: { src: mail.to, alt: mail.to },
              overlay: {
                border: 1,
                spacing: 2,
                color: `conic-gradient(${theme.vars.palette.primary.main}, ${theme.vars.palette.warning.main}, ${theme.vars.palette.primary.main})`,
              },
            }}
          >
            {mail.to?.charAt(0).toUpperCase()}
          </AnimateAvatar>
        </NoSsr>
      </IconButton>

      <Stack spacing={0.5} sx={{ width: 0, flexGrow: 1 }}>
        <Stack spacing={0.5} direction="row">
          <Typography component="span" variant="subtitle2" sx={{ flexShrink: 0 }}>
            {mail.sender?.username}
          </Typography>
          <Typography component="span" noWrap variant="body2" sx={{ color: 'text.secondary' }}>
            {customizeFullName(mail.sender?.fullName ?? '')}
          </Typography>
        </Stack>

        <Typography noWrap component="span" variant="caption" sx={{ color: 'text.secondary' }}>
          {`To: ${mail.to}`}
        </Typography>
      </Stack>
    </>
  );

  const renderAttachments = (
    <>
      {mail.files?.map((file: any) => (
        <Stack width={0.3}>
          <FileRecentItem key={file.id} file={file} />
        </Stack>
      ))}
    </>
  );

  const renderContent = (
    <Markdown children={mail.body} sx={{ px: 2, '& p': { typography: 'body2' } }} />
  );

  // const renderEditor = (
  //   <>
  //     <Editor sx={{ maxHeight: 320 }} />

  //     <Stack direction="row" alignItems="center">
  //       <IconButton>
  //         <Iconify icon="solar:gallery-add-bold" />
  //       </IconButton>

  //       <IconButton>
  //         <Iconify icon="eva:attach-2-fill" />
  //       </IconButton>

  //       <Stack flexGrow={1} />

  //       <Button
  //         color="primary"
  //         variant="contained"
  //         endIcon={<Iconify icon="iconamoon:send-fill" />}
  //       >
  //         Send
  //       </Button>
  //     </Stack>
  //   </>
  // );

  return (
    <>
      <Stack direction="row" alignItems="center" flexShrink={0} sx={{ pl: 2, pr: 1, height: 56 }}>
        {renderHead}
      </Stack>

      <Stack
        spacing={2}
        flexShrink={0}
        direction="row"
        sx={{
          p: 2,
          borderTop: `1px dashed ${theme.vars.palette.divider}`,
          borderBottom: `1px dashed ${theme.vars.palette.divider}`,
        }}
      >
        {renderSubject}
      </Stack>

      <Stack flexShrink={0} direction="row" alignItems="center" sx={{ pt: 2, px: 2 }}>
        {renderSender}
      </Stack>

      <ScrollBar sx={{ mt: 3, flex: '1 1 240px' }}>{renderContent}</ScrollBar>

      {!!mail.files?.length && (
        <Stack sx={{ p: 2, mt: 2 }} direction="row" display="flex">
          {renderAttachments}
        </Stack>
      )}

      {/* <Stack flexShrink={0} spacing={2} sx={{ p: 2 }}>
        {renderEditor}
      </Stack> */}
    </>
  );
}
