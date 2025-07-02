import { gql } from 'src/__generated__/gql';

export const FETCH_PLACEMENT_MEMBERS_WITH_LEVEL = gql(/* GraphQL */ `
  query PlacementMembersWithLevel($data: PlacementWithLevelInput!) {
    placementMembersWithLevel(data: $data) {
      id
      status
      username
      fullName
      createdAt
      teamStrategy
      placementStatus
      placementPosition
      placementParentId
      cmnCalculatedWeeks
      commission {
        begL
        begR
        newL
        newR
      }
    }
  }
`);

export const FETCH_PLACEMENT_CHILDREN_BY_ID = gql(/* GraphQL */ `
  query PlacementChildrenById($data: IDInput!) {
    placementChildrenById(data: $data) {
      id
      status
      username
      fullName
      createdAt
      teamStrategy
      placementStatus
      placementPosition
      placementParentId
      cmnCalculatedWeeks
      commission {
        begL
        begR
        newL
        newR
      }
    }
  }
`);

export const FETCH_PLACEMENT_TO_BOTTOM = gql(/* GraphQL */ `
  query PlacementMembersToBottom($data: PlacementToBottomInput!) {
    placementMembersToBottom(data: $data) {
      id
      status
      username
      fullName
      createdAt
      teamStrategy
      placementStatus
      placementPosition
      placementParentId
      cmnCalculatedWeeks
      commission {
        begL
        begR
        newL
        newR
      }
    }
  }
`);

export const FETCH_PLACEMENT_SEARCH_MEMBER = gql(/* GraphQL */ `
  query PlacementSearchMembers($sort: String, $page: String, $filter: JSONObject) {
    placementSearchMembers(sort: $sort, page: $page, filter: $filter) {
      id
      username
      fullName
      createdAt
      placementPosition
      placementParentId
      status
      placementStatus
    }
  }
`);
