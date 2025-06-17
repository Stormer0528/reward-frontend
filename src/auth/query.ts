import { gql } from 'src/__generated__/gql';

export const FETCH_ME = gql(/* GraphQL */ `
  query fetchMe {
    memberMe {
      ...MemberFields
      memberWallets {
        id
        note
        address
        percent
        payoutId
        isDefault
      }
      communications {
        body
        open
        sent
        email
        sender
        subject
        openTime
        sentTime
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`);
