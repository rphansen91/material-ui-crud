import gql from 'graphql-tag';

export default gql`
  fragment PlaidAccount on PlaidAccount {
    account_id
    mask
    name
    official_name
    subtype
    hidden
    type
    verification_status
    balances {
      available
      current
      limit
      iso_currency_code
      unofficial_currency_code
    }
  }
`;

export const AccountActivityFragment = gql`
  fragment AccountActivity on AccountActivity {
    _id
    type
    userId
    account_id
    created_by
    created_date
  }
`;
