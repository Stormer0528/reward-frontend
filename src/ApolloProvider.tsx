import React from 'react';
import { createClient } from 'graphql-ws';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { createFragmentRegistry } from '@apollo/client/cache';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import {
  gql,
  split,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';

import { CONFIG } from 'src/config';

const httpLink = createHttpLink({
  uri: `${CONFIG.SERVER_HOST}/graphql`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: CONFIG.WS_PATH,
    connectionParams: () => {
      const token = localStorage.getItem(CONFIG.STORAGE_TOKEN_KEY);
      return {
        authorization: token ? `Bearer ${token}` : '',
      };
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(CONFIG.STORAGE_TOKEN_KEY);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.concat(authLink, splitLink),
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(gql`
      # TODO: Consider rename Member to Miner
      fragment MemberFields on Member {
        id
        ID
        city
        email
        point
        state
        avatar
        mobile
        status
        assetId
        country
        zipCode
        username
        fullName
        sponsorId
        allowState
        ethAssetId
        teamReport
        OTPEnabled
        teamStrategy
        syncWithSendy
        emailVerified
        isTexitRanger
        peerAcceptable
        peerETHAddress
        primaryAddress
        secondaryAddress
        totalIntroducers
        preferredContact
        commissionDefault
        placementParentId
        placementPosition
        cmnCalculatedWeeks
        placementRequested
        preferredContactDetail
      }
    `),
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
  connectToDevTools: true,
});

const ApolloAppProvider = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export default ApolloAppProvider;
