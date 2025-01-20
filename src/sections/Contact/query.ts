import { gql } from 'src/__generated__';

export const CONTACT_TO_ADMIN = gql(/* GraphQL */ `
  mutation ContactToAdmin($data: ContactToAdmin!) {
    contactToAdmin(data: $data) {
      message
      result
    }
  }
`);
