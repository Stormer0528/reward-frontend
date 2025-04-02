import { gql } from 'src/__generated__/gql';

export const FETCH_SPONSOR_QUERY = gql(/* GraphQL */ `
  query SponsorMembers {
    sponsorMembers {
      id
      username
      fullName
      sponsorId
      createdAt
    }
  }
`);
