import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';
import PlaidTransactionFragment from '../fragments/transaction';
import { PlaidInstitutionFragment } from '../fragments/institution';

export default gql`
  query VerifiableTransactionsPageAdmin(
    $type: String
    $userId: String
    $searchText: String
    $filter: VerifiableTransactionsFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    verifiableTransactionsPageAdmin(
      type: $type
      userId: $userId
      searchText: $searchText
      filter: $filter
      pagination: $pagination
      sort: $sort
    ) {
      total_transactions
      accounts {
        ...PlaidAccount
        userId
        institution_id
      }
      transactions {
        ...PlaidTransaction
        userId
        verification_status
        verification_reason
        verification_date
        verification_by
      }
      cardUsers {
        userId
        photoURL
        displayName
        email
      }
      institutions {
        ...PlaidInstitution
      }
    }
  }

  ${PlaidAccountFragment}
  ${PlaidTransactionFragment}
  ${PlaidInstitutionFragment}
`;
