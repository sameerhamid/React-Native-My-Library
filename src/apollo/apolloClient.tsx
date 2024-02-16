import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export default async (): Promise<ApolloClient<NormalizedCacheObject> | null> => {
  const cache = new InMemoryCache();
  const apolloFetch = async (
    uri: Request | string,
    options: RequestInit,
  ): Promise<Response> => {
    // const authToken = await Authorise();

    const updatedOptions = {};

    return fetch(uri, updatedOptions);
  };
  const httpLink = new HttpLink({
    uri: 'https//github.com/sameerhamid',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });
  return client;
};
