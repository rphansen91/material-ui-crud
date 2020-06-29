import gql from 'graphql-tag';

export default gql`
  fragment UserConfig on UserConfig {
    plaidEnv
    activeSubscription
    activeSubscriptionInTrial
    plaidLinkUnavailable
    maxTrialInstitutions
    maxInstitutions
  }
`;
