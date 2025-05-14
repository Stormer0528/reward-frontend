import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FETCH_INVOICE_BY_ID, FETCH_INVOICES_QUERY } from './query';

export function useFetchInvoices() {
  const [fetchInvoices, { loading, data, called }] = useLazyQuery(FETCH_INVOICES_QUERY);

  const rowCountRef = useRef(data?.invoices.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.invoices.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    called,
    loading,
    rowCount,
    invoices: data?.invoices.invoices ?? [],
    fetchInvoices,
  };
}

export function useFetchInvoiceById() {
  const [fetchInvoiceById, { loading, data, error }] = useLazyQuery(FETCH_INVOICE_BY_ID);

  return { loading, invoice: data?.invoiceById, error, fetchInvoiceById };
}
