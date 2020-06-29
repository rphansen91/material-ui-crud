import gql from 'graphql-tag';

export default gql`
  fragment PlaidItem on PlaidItem {
    available_products
    billed_products
    error {
      error_type
      error_code
      error_message
      display_message
      causes {
        error_type
        error_code
        error_message
        display_message
        item_id
      }
    }
    institution_id
    item_id
    webhook
    consent_expiration_time
  }
`;
