import { ApolloClient, ApolloClientOptions } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const httpLink = (uri?: string | undefined) =>
  createHttpLink({
    fetchOptions: {
      timeout: 2000,
    },
    uri,
  });

export function getClient(
  uri: string,
  getRequestContext?: () => Promise<any> | any,
  clientOpts?: Partial<ApolloClientOptions<any>>
) {
  return new ApolloClient({
    cache: new InMemoryCache({}),
    link: setContext(async (o: any, { headers }) => {
      try {
        const context = getRequestContext
          ? (await getRequestContext()) || {}
          : {};
        return { ...context, headers: { ...headers, ...context.headers } };
      } catch (e) {
        return { headers };
      }
    }).concat(httpLink(uri)),
    ...clientOpts,
  });
}
