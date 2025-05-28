import type { Email, Recipient } from 'src/__generated__/graphql';

import { useBoolean } from 'minimal-shared/hooks';
import { useState, useEffect, useCallback } from 'react';

import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/SnackBar';

import { Layout } from './view/layout';
import { MailNav } from './view/mail-nav';
import { SentList } from './view/sent-list';
import { InboxList } from './view/inbox-list';
import { MailHeader } from './view/mail-header';
import { MailCompose } from './view/mail-compose';
import { SentDetails } from './view/sent-details';
import { InboxDetails } from './view/inbox-details';
import {
  useFetchEmails,
  useRemoveEmail,
  useFetchEmailById,
  useFetchRecipients,
  useMoveEmailToTrash,
  useSetRecipientStatus,
  useFetchRecipientById,
} from './useApollo';

// ----------------------------------------------------------------------

const LABEL_INDEX = 'inbox';

export default function MailView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedMailId = searchParams.get('id') ?? '';
  const selectedLabelId = searchParams.get('label') ?? LABEL_INDEX;

  const mdUp = useResponsive('up', 'md');

  const [inbox, setInbox] = useState<Recipient[]>([]);
  const [sent, setSent] = useState<Email[]>([]);

  const openNav = useBoolean();
  const openMail = useBoolean();
  const openCompose = useBoolean();

  const { removeEmail } = useRemoveEmail();
  const { moveEmailToTrash } = useMoveEmailToTrash();
  const { setRecipientStatus } = useSetRecipientStatus();
  const { loading, emails, fetchEmails } = useFetchEmails();
  const { loading: emailLoading, email, fetchEmailById } = useFetchEmailById();
  const { loading: recipientsLoading, recipients, fetchRecipients } = useFetchRecipients();
  const { loading: recipientLoading, recipient, fetchRecipientById } = useFetchRecipientById();

  const labels = [
    {
      id: 'inbox',
      type: 'inbox',
      name: 'Inbox',
      color: 'default',
      unreadCount: inbox.filter((item) => !item.isRead).length,
    },
    {
      id: 'sent',
      type: 'sent',
      name: 'Sent',
      color: 'default',
    },
    {
      id: 'drafts',
      type: 'drafts',
      name: 'Drafts',
      color: 'default',
    },
    {
      id: 'trash',
      type: 'Trash',
      name: 'Trash',
      color: 'default',
    },
  ];

  const handleMoveTrash = async (mailId: string) => {
    if (selectedLabelId === 'trash') {
      const { data } = await removeEmail({ variables: { data: { id: mailId } } });

      if (data) {
        toast.success('Successfully removed permanently');

        setSent(emails.filter((item: Email) => item.id !== mailId));
      }
    } else {
      const { data } = await moveEmailToTrash({ variables: { data: { id: mailId } } });

      if (data) {
        toast.success('Successfully moved to Trash');

        setSent(emails.filter((item: Email) => item.id !== mailId));
      }

      router.push(`${paths.dashboard.mail.root}?label=${selectedLabelId}`);
    }
  };

  const handleToggleCompose = useCallback(() => {
    if (openNav.value) {
      openNav.onFalse();
    }
    openCompose.onToggle();
  }, [openCompose, openNav]);

  const handleClickLabel = useCallback(
    (labelId: string) => {
      if (!mdUp) {
        openNav.onFalse();
      }

      if (labelId) {
        const href =
          labelId !== LABEL_INDEX
            ? `${paths.dashboard.mail.root}?label=${labelId}`
            : paths.dashboard.mail.root;
        router.push(href);
      }
    },
    [openNav, router, mdUp]
  );

  const handleClickMail = useCallback(
    (mailId: string) => {
      if (!mdUp) {
        openMail.onFalse();
      }

      const handleUpdate = async () => {
        try {
          fetchEmailById({ variables: { data: { id: mailId } } });
        } catch (error) {
          console.log('error => ', error);
        }
      };

      handleUpdate();

      const href =
        selectedLabelId !== LABEL_INDEX
          ? `${paths.dashboard.mail.root}?id=${mailId}&label=${selectedLabelId}`
          : `${paths.dashboard.mail.root}?id=${mailId}`;

      router.push(href);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openMail, router, selectedLabelId, mdUp, inbox]
  );

  const handleClickInbox = useCallback(
    (mailId: string, emailId: string) => {
      if (!mdUp) {
        openMail.onFalse();
      }

      const handleUpdate = async () => {
        try {
          if (selectedLabelId === 'inbox') {
            const { data } = await setRecipientStatus({
              variables: { data: { id: mailId, isRead: true } },
            });

            if (data) {
              setInbox(
                inbox.map((item: Recipient) =>
                  item.id === mailId ? { ...item, isRead: true } : item
                )
              );
            }
          }

          fetchRecipientById({ variables: { data: { id: mailId } } });
        } catch (error) {
          console.log('error => ', error);
        }
      };

      handleUpdate();

      const href =
        selectedLabelId !== LABEL_INDEX
          ? `${paths.dashboard.mail.root}?id=${mailId}&label=${selectedLabelId}`
          : `${paths.dashboard.mail.root}?id=${mailId}`;

      router.push(href);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openMail, router, selectedLabelId, mdUp, inbox]
  );

  useEffect(() => {
    fetchRecipients({ variables: { sort: '-isRead,updatedAt' } });

    if (selectedLabelId === 'drafts') {
      fetchEmails({
        variables: { filter: { isDraft: true, isDeleted: false }, sort: 'updatedAt' },
      });
    } else if (selectedLabelId === 'sent') {
      fetchEmails({
        variables: { filter: { isDraft: false, isDeleted: false }, sort: 'updatedAt' },
      });
    } else if (selectedLabelId === 'trash') {
      fetchEmails({
        variables: { filter: { isDeleted: true }, sort: 'updatedAt' },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLabelId]);

  useEffect(() => {
    setInbox(recipients);
  }, [recipients]);

  useEffect(() => {
    setSent(emails);
  }, [emails]);

  useEffect(() => {
    if (openCompose.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openCompose.value]);

  return (
    <>
      <DashboardContent
        maxWidth={false}
        sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
          Mail
        </Typography>

        <Layout
          sx={{
            p: 1,
            borderRadius: 2,
            flex: '1 1 auto',
            bgcolor: 'background.neutral',
          }}
          slots={{
            header: (
              <MailHeader
                onOpenNav={openNav.onTrue}
                onOpenMail={openMail.value ? undefined : openMail.onTrue}
                sx={{ display: { md: 'none' } }}
              />
            ),
            nav: (
              <MailNav
                labels={labels}
                empty={openMail.value}
                openNav={openNav.value}
                onCloseNav={openNav.onFalse}
                selectedLabelId={selectedLabelId}
                handleClickLabel={handleClickLabel}
                onToggleCompose={handleToggleCompose}
              />
            ),
            list: (
              <>
                {selectedLabelId === 'inbox' && (
                  <InboxList
                    emails={inbox}
                    empty={openMail.value}
                    loading={recipientsLoading}
                    openMail={openMail.value}
                    onCloseMail={openMail.onFalse}
                    onClickMail={handleClickInbox}
                    selectedLabelId={selectedLabelId}
                    selectedMailId={selectedMailId}
                  />
                )}

                {(selectedLabelId === 'sent' ||
                  selectedLabelId === 'drafts' ||
                  selectedLabelId === 'trash') && (
                  <SentList
                    emails={sent}
                    empty={openMail.value}
                    loading={loading}
                    openMail={openMail.value}
                    onCloseMail={openMail.onFalse}
                    onClickMail={handleClickMail}
                    selectedLabelId={selectedLabelId}
                    selectedMailId={selectedMailId}
                  />
                )}
              </>
            ),
            details: (
              <>
                {selectedLabelId === 'inbox' && (
                  <InboxDetails
                    mail={recipient}
                    empty={openMail.value}
                    loading={recipientLoading}
                    renderLabel={(id: string) => labels.filter((label: any) => label.id === id)[0]}
                  />
                )}

                {(selectedLabelId === 'sent' ||
                  selectedLabelId === 'drafts' ||
                  selectedLabelId === 'trash') && (
                  <SentDetails
                    mail={email}
                    empty={openMail.value}
                    loading={emailLoading}
                    handleMoveTrash={handleMoveTrash}
                    renderLabel={(id: string) => labels.filter((label: any) => label.id === id)[0]}
                  />
                )}
              </>
            ),
          }}
        />
      </DashboardContent>

      {openCompose.value && <MailCompose onCloseCompose={openCompose.onFalse} />}
    </>
  );
}
