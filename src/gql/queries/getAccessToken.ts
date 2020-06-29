import gql from 'graphql-tag';
import PlaidAccessTokenFragment from '../fragments/accessToken';

export default gql`
  query GetAccessToken($publicToken: String!) {
    getAccessToken(publicToken: $publicToken) {
      ...PlaidAccessToken
    }
  }

  ${PlaidAccessTokenFragment}
`;
