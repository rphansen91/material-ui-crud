import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';
import PlaidTransactionFragment from '../fragments/transaction';

export default gql`
  query VerifiableTransactionsPage(
    $type: String
    $searchText: String
    $filter: VerifiableTransactionsFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    verifiableTransactionsPage(
      type: $type
      searchText: $searchText
      filter: $filter
      pagination: $pagination
      sort: $sort
    ) {
      total_transactions
      accounts {
        ...PlaidAccount
      }
      transactions {
        ...PlaidTransaction
        verification_status
        verification_reason
        verification_date
        verification_by
      }
    }
  }

  ${PlaidAccountFragment}
  ${PlaidTransactionFragment}
`;
