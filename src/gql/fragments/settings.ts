import gql from 'graphql-tag';

export default gql`
  fragment UserSettings on UserSettings {
    userId
    billing_status
    notifications_email
    notifications_push
    notifications_filter {
      pending
      falsified
      undetermined
      verified
    }
  }
`;
