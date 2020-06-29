import gql from 'graphql-tag';
import PlaidTransactionFragment from '../fragments/transaction';

export default gql`
  mutation SetTransactionVerificationStatus(
    $transaction_id: String!
    $verification_status: TransactionVerificationStatus
  ) {
    setTransactionVerificationStatus(
      transaction_id: $transaction_id
      verification_status: $verification_status
    ) {
      ...PlaidTransaction
      verification_status
      verification_reason
      verification_date
      verification_by
    }
  }

  ${PlaidTransactionFragment}
`;
