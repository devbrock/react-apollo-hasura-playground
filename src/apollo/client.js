import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://amazing-bass-91.hasura.app/v1/graphql',
    cache: new InMemoryCache()
});