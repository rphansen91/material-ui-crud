import gql from 'graphql-tag';

export default gql`
  mutation SavePurchaseError(
    $error: InAppSubscriptionErrorInput!
    $userInfo: CardUserInfoInput
  ) {
    savePurchaseError(error: $error, userInfo: $userInfo) {
      responseCode
      debugMessage
      code
      message
    }
  }
`;
