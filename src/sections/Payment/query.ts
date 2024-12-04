import { gql } from 'src/__generated__/gql';

export const FETCH_PAYMENT_QUERY = gql(/* GraphQL */ `
  query PaymentMethods($sort: String, $page: String, $filter: JSONObject) {
    paymentMethods(sort: $sort, page: $page, filter: $filter) {
      paymentMethods {
        id
        name
        visible
        createdAt
        defaultLink
        paymentMethodLinks {
          id
          link
          packageId
          paymentMethodId
        }
      }
      total
    }
  }
`);
