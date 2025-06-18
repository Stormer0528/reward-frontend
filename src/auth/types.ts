import type { Member } from 'src/__generated__/graphql';

export type AuthContextValue = {
  user?: Member | null;
  loading: boolean;
  isAuthenticated: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => void;
};
