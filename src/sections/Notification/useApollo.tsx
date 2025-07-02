import { useRef, useMemo } from 'react';
import { useMutation, useLazyQuery, useSubscription } from '@apollo/client';

import {
  SET_READ_NOTIFICATIONS,
  READ_ALL_NOTIFICATIONS,
  FETCH_NOTIFICATION_QUERY,
  SUBSCRIPTION_NOTIFICATION,
} from './query';

export function useFetchNotifications() {
  const [fetchNotification, { loading, data }] = useLazyQuery(FETCH_NOTIFICATION_QUERY, {
    variables: { sort: 'createdAt' },
  });

  const rowCountRef = useRef(data?.notifications.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.notifications.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    notifications: data?.notifications.notifications ?? [],
    fetchNotification,
  };
}

export function useReadNotifications() {
  const [readNotifications, { loading, data }] = useMutation(SET_READ_NOTIFICATIONS, {
    awaitRefetchQueries: true,
    refetchQueries: ['Notifications'],
  });

  return { loading, data, readNotifications };
}

export function useReadAllNotifications() {
  const [readAllNotifications, { loading, data }] = useMutation(READ_ALL_NOTIFICATIONS, {
    awaitRefetchQueries: true,
    refetchQueries: ['Notifications'],
  });

  return { loading, data, readAllNotifications };
}

export function useNewNotifications() {
  const { loading, data } = useSubscription(SUBSCRIPTION_NOTIFICATION);

  return { loading, newNotification: data?.newNotification };
}
