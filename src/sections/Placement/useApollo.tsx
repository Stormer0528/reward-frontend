import { useLazyQuery } from '@apollo/client';

import {
  FETCH_PLACEMENT_TO_BOTTOM,
  FETCH_PLACEMENT_TO_MEMBERS,
  FETCH_PLACEMENT_SEARCH_MEMBER,
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

export function useFetchPlacementToMembers() {
  const [fetchPlacementToMembers, { loading, data }] = useLazyQuery(FETCH_PLACEMENT_TO_MEMBERS);

  return { loading, members: data?.placementMembersToMember ?? [], fetchPlacementToMembers };
}

export function useFetchPlacementToBottom() {
  const [fetchPlacementToBottom, { loading, data }] = useLazyQuery(FETCH_PLACEMENT_TO_BOTTOM);

  return { loading, members: data?.placementMembersToBottom ?? [], fetchPlacementToBottom };
}

export function useFetchPlacementSearchMembers() {
  const [fetchSearchMembers, { loading, data, error }] = useLazyQuery(
    FETCH_PLACEMENT_SEARCH_MEMBER
  );

  return { loading, members: data?.placementSearchMembers ?? [], error, fetchSearchMembers };
}
