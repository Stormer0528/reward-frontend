import { gql } from 'src/__generated__/gql';

export const CREATE_BUG_REPORT = gql(/* GraphQL */ `
  mutation CreateBugReport($data: CreateBugReportInput!) {
    createBugReport(data: $data) {
      message
      result
    }
  }
`);
