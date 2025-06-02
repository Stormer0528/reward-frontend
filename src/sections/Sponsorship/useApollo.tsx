import { useMutation } from '@apollo/client';

import { CREATE_ADD_MEMBER_ORDER } from './query';

export function useCreateAddMemberOrder() {
  const [createAddMemberOrder, { loading, data, error }] = useMutation(CREATE_ADD_MEMBER_ORDER);

  return { loading, data, error, createAddMemberOrder };
}
