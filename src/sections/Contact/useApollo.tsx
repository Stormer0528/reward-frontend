import { useMutation } from '@apollo/client';

import { CONTACT_TO_ADMIN } from './query';

export function useContactToAdmin() {
  const [contactToAdmin, { loading, data, error }] = useMutation(CONTACT_TO_ADMIN);

  return { loading, data, error, contactToAdmin };
}
