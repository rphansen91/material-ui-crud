import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';
import PlaidTransactionFragment from '../fragments/transaction';
import PlaidItemFragment from '../fragments/item';
import UserSettingsFragment from '../fragments/settings';
import PlaidAccessTokenFragment from '../fragments/accessToken';
import {
  PlaidInstitutionFragment,
  PlaidInstitutionStatusFragment,
} from '../fragments/institution';

export default gql`
  query GetCachedTransactions(
    $startDate: Date
    $endDate: Date
    $page: Int
    $perPage: Int
  ) {
    settings {
      ...UserSettings
    }
    getAccessTokens {
      ...PlaidAccessToken
      item {
        ...PlaidItem
      }
      institution {
        ...PlaidInstitution
        status {
          ...PlaidInstitutionStatus
        }
      }
    }
    getCachedTransactions(
      startDate: $startDate
      endDate: $endDate
      page: $page
      perPage: $perPage
    ) {
      total_transactions
      accounts {
        ...PlaidAccount
        transactions_ready
        institution_id
        item_id
      }
      transactions {
        ...PlaidTransaction
      }
    }
  }

  ${PlaidItemFragment}
  ${PlaidAccessTokenFragment}
  ${UserSettingsFragment}
  ${PlaidAccountFragment}
  ${PlaidTransactionFragment}
  ${PlaidInstitutionFragment}
  ${PlaidInstitutionStatusFragment}
`;
