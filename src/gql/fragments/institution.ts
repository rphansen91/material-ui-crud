import gql from 'graphql-tag';

export const PlaidInstitutionFragment = gql`
  fragment PlaidInstitution on PlaidInstitution {
    name
    institution_id
    primary_color
    url
    logo
  }
`;

export const PlaidInstitutionStatusFragment = gql`
  fragment PlaidInstitutionStatus on PlaidInstitutionStatus {
    item_logins {
      status
    }
    transactions_updates {
      status
    }
    auth {
      status
    }
    balance {
      status
    }
    identity {
      status
    }
  }
`;
