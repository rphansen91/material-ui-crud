import gql from 'graphql-tag';

export default gql`
  fragment PlaidAccessToken on PlaidAccessToken {
    publicToken
    accessToken
    itemId
    date
    env
  }
`;
