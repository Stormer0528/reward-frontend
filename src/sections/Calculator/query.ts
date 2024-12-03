import { gql } from 'src/__generated__';

export const CALCULATION = gql(/* GraphQL */ `
  query CalculateProfitability($data: ProfitabilityCalculationInput!) {
    calculateProfitability(data: $data) {
      startDate
      target
      init
      period
      txc
      txcCost
      extraTXC
      endDate
      txcPrice
    }
  }
`);
