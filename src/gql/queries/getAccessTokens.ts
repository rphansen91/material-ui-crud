import gql from 'graphql-tag';
import {
  PlaidInstitutionFragment,
  PlaidInstitutionStatusFragment,
} from '../fragments/institution';
import PlaidItemFragment from '../fragments/item';
import UserSettingsFragment from '../fragments/settings';
import PlaidAccessTokenFragment from '../fragments/accessToken';

export default gql`
  query GetAccessTokens {
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
      }
    }
  }

  ${PlaidAccessTokenFragment}
  ${PlaidInstitutionFragment}
  ${PlaidItemFragment}
  ${UserSettingsFragment}
`;

export const GetAccessTokensWithInstitutions = gql`
  query GetAccessTokensWithInstitutions {
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
      }
    }
  }

  ${PlaidAccessTokenFragment}
  ${PlaidItemFragment}
  ${PlaidInstitutionFragment}
  ${UserSettingsFragment}
`;

export const GetAccessTokensWithInstitutionStatus = gql`
  query GetAccessTokensWithInstitutionStatus {
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
  }

  ${PlaidAccessTokenFragment}
  ${PlaidItemFragment}
  ${PlaidInstitutionFragment}
  ${PlaidInstitutionStatusFragment}
  ${UserSettingsFragment}
`;
