import { useLazyQuery } from '@apollo/client';

import { CALCULATION } from './query';

export function useCalculation() {
  const [calculateProfitability, { loading, data }] = useLazyQuery(CALCULATION);

  return {
    loading,
    data: data?.calculateProfitability ?? {
      txc: 0,
      init: 0,
      period: 0,
      target: 0,
      txcCost: 0,
      extraTXC: 0,
      endDate: new Date('02/01/2026'),
      txcPrice: 16,
      startDate: new Date(),
    },
    calculateProfitability,
  };
}
