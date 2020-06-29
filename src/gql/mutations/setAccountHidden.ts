import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';

export default gql`
  mutation SetAccountHidden($account_id: String!, $hidden: Boolean!) {
    setAccountHidden(account_id: $account_id, hidden: $hidden) {
      ...PlaidAccount
    }
  }
  ${PlaidAccountFragment}
`;
