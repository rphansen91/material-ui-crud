import gql from 'graphql-tag';
import PlaidAccountFragment from '../fragments/account';
import PlaidTransactionFragment from '../fragments/transaction';
import PlaidItemFragment from '../fragments/item';
import UserSettingsFragment from '../fragments/settings';
import UserConfigFragment from '../fragments/config';
import PlaidAccessTokenFragment from '../fragments/accessToken';
import CardUserDeviceFragment from '../fragments/device';
import InAppSubscriptionFragment from '../fragments/inAppSubscription';
import InAppSubscriptionErrorFragment from '../fragments/inAppSubscriptionError';
import {
  PlaidInstitutionFragment,
  PlaidInstitutionStatusFragment,
} from '../fragments/institution';

export default gql`
  query CardUser(
    $userId: String
    $startDate: Date
    $endDate: Date
    $page: Int
    $perPage: Int
  ) {
    cardUserById(userId: $userId) {
      email
      userId
      photoURL
      displayName
      date
      config {
        ...UserConfig
      }
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
      getSubscriptionHistory {
        total
        data {
          ...InAppSubscription
        }
      }
      getSubscriptionErrorHistory {
        total
        data {
          ...InAppSubscriptionError
        }
      }
      devices {
        total
        data {
          ...CardUserDevice
        }
      }
    }
  }

  ${PlaidItemFragment}
  ${PlaidAccessTokenFragment}
  ${UserConfigFragment}
  ${UserSettingsFragment}
  ${PlaidAccountFragment}
  ${PlaidTransactionFragment}
  ${PlaidInstitutionFragment}
  ${PlaidInstitutionStatusFragment}
  ${CardUserDeviceFragment}
  ${InAppSubscriptionFragment}
  ${InAppSubscriptionErrorFragment}
`;
