import { ApolloClient, ApolloClientOptions } from 'apollo-client';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

type IStage = 'local' | 'sandbox' | 'development' | 'production';
export const LOCAL = '//localhost:9000';
export const SANDBOX =
  'https://coin-plaid-apollo-sandbox-zatxacztoa-uc.a.run.app';
export const DEVELOPMENT =
  'https://coin-plaid-apollo-develop-zatxacztoa-uc.a.run.app';
export const PRODUCTION = 'https://coin-plaid-apollo-zatxacztoa-uc.a.run.app';
export const LOCAL_URI = `${LOCAL}/gql`;
export const LOCAL_HOOKS_URI = `${LOCAL}/hook`;
export const SANDBOX_URI = `${SANDBOX}/gql`;
export const SANDBOX_HOOKS_URI = `${SANDBOX}/hook`;
export const DEVELOPMENT_URI = `${DEVELOPMENT}/gql`;
export const DEVELOPMENT_HOOKS_URI = `${DEVELOPMENT}/hook`;
export const PRODUCTION_URI = `${PRODUCTION}/gql`;
export const PRODUCTION_HOOKS_URI = `${PRODUCTION}/hook`;

const httpLink = (uri?: string | undefined) =>
  createHttpLink({
    fetchOptions: {
      timeout: 2000,
    },
    uri,
  });

export const getHost = (stage?: IStage) => {
  switch (stage) {
    case 'local':
      return LOCAL;
    case 'sandbox':
      return SANDBOX;
    case 'development':
      return DEVELOPMENT;
    default:
      return PRODUCTION;
  }
};

export const getClientUri = (stage?: IStage) => {
  switch (stage) {
    case 'local':
      return LOCAL_URI;
    case 'sandbox':
      return SANDBOX_URI;
    case 'development':
      return DEVELOPMENT_URI;
    default:
      return PRODUCTION_URI;
  }
};

export const getHooksUri = (stage?: IStage) => {
  switch (stage) {
    case 'local':
      return LOCAL_HOOKS_URI;
    case 'sandbox':
      return SANDBOX_HOOKS_URI;
    case 'development':
      return DEVELOPMENT_HOOKS_URI;
    default:
      return PRODUCTION_HOOKS_URI;
  }
};

export function getClient(
  uri: string,
  getRequestContext?: () => Promise<any> | any,
  clientOpts?: Partial<ApolloClientOptions<any>>
) {
  return new ApolloClient({
    cache: new InMemoryCache({
      dataIdFromObject: object => {
        switch (object.__typename) {
          case 'UserSettings':
            return object['userId'];
          case 'PlaidAccessToken':
            return object['itemId'];
          case 'PlaidItem':
            return object['item_id'];
          case 'PlaidTransaction':
            return object['transaction_id'];
          case 'PlaidAccount':
            return object['account_id'];
          default:
            return defaultDataIdFromObject(object); // fall back to default handling
        }
      },
    }),
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
