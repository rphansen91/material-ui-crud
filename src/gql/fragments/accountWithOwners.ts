import gql from 'graphql-tag';

export default gql`
  fragment PlaidAccountWithOwners on PlaidAccountWithOwners {
    account_id
    mask
    name
    official_name
    subtype
    type
    verification_status
    balances {
      available
      current
      limit
      iso_currency_code
      unofficial_currency_code
    }
    owners {
      addresses {
        data {
          city
          region
          postal_code
          street
          country
        }
        primary
      }
      emails {
        data
        primary
        type
      }
      names
      phone_numbers {
        data
        primary
        type
      }
    }
  }
`;
