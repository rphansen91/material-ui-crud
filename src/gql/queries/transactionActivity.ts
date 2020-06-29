import gql from 'graphql-tag';
import { TransactionActivityFragment } from '../fragments/transaction';

export default gql`
  query TransactionActivity(
    $transaction_id: String!
    $pagination: Pagination
    $sort: Sort
  ) {
    verifyTransactionLocation(transaction_id: $transaction_id) {
      activity(pagination: $pagination, sort: $sort) {
        total
        data {
          ...TransactionActivity
        }
      }
    }
  }

  ${TransactionActivityFragment}
`;
