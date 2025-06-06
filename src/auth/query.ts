import { gql } from 'src/__generated__/gql';

export const FETCH_ME = gql(/* GraphQL */ `
  query fetchMe {
    memberMe {
      ...MemberFields
      createdAt
      updatedAt
      deletedAt
    }
  }
`);
