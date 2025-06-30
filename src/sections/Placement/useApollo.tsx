import type { PlacementMemberInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';

import {
  ADD_PLACEMENT_CHILD,
  FETCH_PLACEMENT_TO_BOTTOM,
  FETCH_PLACEMENT_CHILDREN_BY_ID,
  FETCH_PLACEMENT_MEMBERS_WITH_LEVEL,
} from './query';

export function useFetchPlacementWithLevel() {
  const [fetchPlacementMembers, { loading, data, called }] = useLazyQuery(
    FETCH_PLACEMENT_MEMBERS_WITH_LEVEL
  );

  return {
    called,
    loading,
    members: data?.placementMembersWithLevel ?? [],
    fetchPlacementMembers,
  };
}

export function useFetchPlacementChildrenById() {
  const [fetchPlacementChildrenById, { loading, data }] = useLazyQuery(
    FETCH_PLACEMENT_CHILDREN_BY_ID
  );

  return { loading, children: data?.placementChildrenById ?? [], fetchPlacementChildrenById };
}

export function useFetchPlacementToBottom() {
  const [fetchPlacementToBottom, { loading, data }] = useLazyQuery(FETCH_PLACEMENT_TO_BOTTOM);

  return { loading, members: data?.placementMembersToBottom ?? [], fetchPlacementToBottom };
}

export function useAddPlacementChild() {
  const [submit, { loading, data, error }] = useMutation(ADD_PLACEMENT_CHILD);

  const addPlacementChild = useCallback(
    (newData: PlacementMemberInput) => submit({ variables: { data: newData } }),
    [submit]
  );

  return { loading, data, error, addPlacementChild };
}
