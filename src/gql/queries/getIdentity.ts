import gql from 'graphql-tag';
import PlaidAccountWithOwnersFragment from '../fragments/accountWithOwners';
import PlaidItemFragment from '../fragments/item';

export default gql`
  query GetIdentity($accessToken: String!) {
    getIdentity(accessToken: $accessToken) {
      accounts {
        ...PlaidAccountWithOwners
      }
      item {
        ...PlaidItem
      }
    }
  }

  ${PlaidAccountWithOwnersFragment}
  ${PlaidItemFragment}
`;
