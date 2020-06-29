import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';
import PlaidTransactionFragment from '../fragments/transaction';
import { PlaidInstitutionFragment } from '../fragments/institution';

export default gql`
  query VerifyTransactionLocation($transaction_id: String!) {
    verifyTransactionLocation(transaction_id: $transaction_id) {
      transaction_id
      institution {
        ...PlaidInstitution
      }
      account {
        ...PlaidAccount
      }
      transaction {
        ...PlaidTransaction
        verification_status
        verification_reason
        verification_date
        verification_by
      }
      during {
        total
      }
      near {
        total
      }
    }
  }

  ${PlaidAccountFragment}
  ${PlaidTransactionFragment}
  ${PlaidInstitutionFragment}
`;
