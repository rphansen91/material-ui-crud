import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';
import PlaidTransactionFragment from '../fragments/transaction';
import PlaidItemFragment from '../fragments/item';

export default gql`
  query GetTransactions(
    $accessToken: String!
    $startDate: Date
    $endDate: Date
    $page: Int
    $perPage: Int
  ) {
    getTransactions(
      accessToken: $accessToken
      startDate: $startDate
      endDate: $endDate
      page: $page
      perPage: $perPage
    ) {
      total_transactions
      accounts {
        ...PlaidAccount
      }
      transactions {
        ...PlaidTransaction
      }
      item {
        ...PlaidItem
      }
    }
  }

  ${PlaidAccountFragment}
  ${PlaidTransactionFragment}
  ${PlaidItemFragment}
`;
