import gql from 'graphql-tag';

export default gql`
  mutation SaveUpdatedPurchaseReceipt(
    $subscription: InAppSubscriptionInput!
    $userInfo: CardUserInfoInput
  ) {
    saveUpdatedPurchaseReceipt(
      subscription: $subscription
      userInfo: $userInfo
    ) {
      productId
    }
  }
`;
