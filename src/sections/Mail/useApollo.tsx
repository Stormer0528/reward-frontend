import { useRef, useMemo } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';

import {
  SEND_EMAIL,
  REMOVE_EMAIL,
  UPSERT_EMAIL,
  MOVE_EMAIL_TRASH,
  FETCH_EMAILS_QUERY,
  SET_RECIPIENT_STATUS,
  FETCH_EMAILBYID_QUERY,
  FETCH_RECIPIENTS_QUERY,
  FETCH_TEAM_MEMBER_QUERY,
  FETCH_RECIPIENTBYID_QUERY,
} from './query';

export function useFetchEmails() {
  const [fetchEmails, { loading, data }] = useLazyQuery(FETCH_EMAILS_QUERY);

  const rowCountRef = useRef(data?.emails.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.emails.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    emails: data?.emails.emails ?? [],
    fetchEmails,
  };
}

export function useFetchRecipients() {
  const [fetchRecipients, { loading, data }] = useLazyQuery(FETCH_RECIPIENTS_QUERY);

  const rowCountRef = useRef(data?.recipients.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.recipients.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    recipients: data?.recipients.recipients ?? [],
    fetchRecipients,
  };
}

export function useFetchEmailById() {
  const [fetchEmailById, { loading, data }] = useLazyQuery(FETCH_EMAILBYID_QUERY);

  return { loading, email: data?.emailById, fetchEmailById };
}

export function useFetchRecipientById() {
  const [fetchRecipientById, { loading, data }] = useLazyQuery(FETCH_RECIPIENTBYID_QUERY);

  return { loading, recipient: data?.recipientById, fetchRecipientById };
}

export function useFetchTeamMembers() {
  const [fetchTeamMembers, { loading, data }] = useLazyQuery(FETCH_TEAM_MEMBER_QUERY);

  return { loading, teamMembers: data?.teamMembers ?? [], fetchTeamMembers };
}

export function useUpsertEmail() {
  const [upsertEmail, { loading, data, error }] = useMutation(UPSERT_EMAIL);

  return { loading, data, error, upsertEmail };
}

export function useRemoveEmail() {
  const [removeEmail, { loading, data, error }] = useMutation(REMOVE_EMAIL);

  return { loading, data, error, removeEmail };
}

export function useSendEmail() {
  const [sendEmail, { loading, data, error }] = useMutation(SEND_EMAIL);

  return { loading, data, error, sendEmail };
}

export function useSetRecipientStatus() {
  const [setRecipientStatus, { loading, data, error }] = useMutation(SET_RECIPIENT_STATUS);

  return { loading, data, error, setRecipientStatus };
}

export function useMoveEmailToTrash() {
  const [moveEmailToTrash, { loading, data, error }] = useMutation(MOVE_EMAIL_TRASH);

  return { loading, data, error, moveEmailToTrash };
}
