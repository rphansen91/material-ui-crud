import gql from 'graphql-tag';

export default gql`
  fragment PlaidTransaction on PlaidTransaction {
    account_id
    account_owner
    amount
    iso_currency_code
    unofficial_currency_code
    category
    category_id
    date
    created_date
    location {
      address
      city
      lat
      lon
      region
      store_number
      postal_code
      country
    }
    name
    payment_meta {
      by_order_of
      payee
      payer
      payment_method
      payment_processor
      ppd_id
      reason
      reference_number
    }
    pending
    pending_transaction_id
    transaction_id
    transaction_type
  }
`;

export const TransactionActivityFragment = gql`
  fragment TransactionActivity on TransactionActivity {
    _id
    type
    message
    userId
    transaction_id
    created_by
    created_date
    pending_transaction_id {
      previous
      current
    }
    verification_status {
      previous
      current
    }
    verification_reason {
      previous
      current
    }
    verification_by {
      previous
      current
    }
  }
`;
