import gql from 'graphql-tag';
import UserSettingsFragment from '../fragments/settings';

export default gql`
  mutation UpdateSettings($settings: UserSettingsInput!) {
    updateSettings(settings: $settings) {
      ...UserSettings
    }
  }

  ${UserSettingsFragment}
`;
