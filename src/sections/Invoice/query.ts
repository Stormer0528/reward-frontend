import { gql } from 'src/__generated__/gql';

export const FETCH_INVOICES_QUERY = gql(/* GraphQL */ `
  query Invoices($sort: String, $page: String, $filter: JSONObject) {
    invoices(sort: $sort, page: $page, filter: $filter) {
      invoices {
        id
        name
        status
        dueDate
        createdAt
        description
        amountInCents
        invoiceFile {
          id
          url
          size
          mimeType
          originalName
        }
      }
      total
    }
  }
`);

export const FETCH_INVOICE_BY_ID = gql(/* GraphQL */ `
  query InvoiceById($data: IDNInput!) {
    invoiceById(data: $data) {
      id
      name
      status
      dueDate
      createdAt
      description
      amountInCents
      proof {
        id
        type
        note
        refId
        amount
        orderedAt
        files {
          id
          url
          size
          mimeType
          originalName
        }
        reflinks {
          link
          linkType
        }
      }
    }
  }
`);
