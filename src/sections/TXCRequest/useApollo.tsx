import type { CreateBuyTxcInput } from 'src/__generated__/graphql';

import { useRef, useMemo, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { useQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import { TXC_REQUEST_LIST, CREATE_BUY_TXC_ORDER } from './query';

export function useFetchTXCRequestList() {
  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, data } = useQuery(TXC_REQUEST_LIST, {
    variables: { filter: graphQueryFilter, page, sort },
  });

  const rowCountRef = useRef(data?.txcRequests.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.txcRequests.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return { loading, txcRequests: data?.txcRequests.txcRequests ?? [], rowCount };
}

export function useCreateBuyTXCOrder() {
  const [submit, { loading, data, error }] = useMutation(CREATE_BUY_TXC_ORDER);

  const createBuyTXCOrder = useCallback(
    (newData: CreateBuyTxcInput) => submit({ variables: { data: newData } }),
    [submit]
  );

  return { loading, data, error, createBuyTXCOrder };
}
