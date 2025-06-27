import type { CreateReimbursementInput } from 'src/__generated__/graphql';

import { useRef, useMemo, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import { FETCH_REIMBURSEMENT, CREATE_REIMBURSEMENT } from './query';

export function useFetchReimbursement() {
  const [{ page = '1,50', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);
  const { loading, data } = useQuery(FETCH_REIMBURSEMENT, {
    variables: { filter: graphQueryFilter, page, sort },
  });

  const rowCountRef = useRef(data?.reimbursements.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.reimbursements.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return { loading, rowCount, reimbursements: data?.reimbursements.reimbursements ?? [] };
}

export function useCreteReimbursement() {
  const [submit, { loading, error }] = useMutation(CREATE_REIMBURSEMENT);

  const createReimbursement = useCallback(
    (data: CreateReimbursementInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, createReimbursement };
}
