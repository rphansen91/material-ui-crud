import gql from 'graphql-tag';
import UserSettingsFragment from '../fragments/settings';

export default gql`
  query GetSettings {
    settings {
      ...UserSettings
    }
  }

  ${UserSettingsFragment}
`;
