import { gql } from 'src/__generated__/gql';

export const FETCH_PACKAGES = gql(/* GraphQL */ `
  query Packages($sort: String, $filter: JSONObject) {
    packages(sort: $sort, filter: $filter) {
      packages {
        id
        date
        token
        point
        amount
        status
        createdAt
        updatedAt
        deletedAt
        productName
        orderVisibility
        enrollVisibility
      }
    }
  }
`);
