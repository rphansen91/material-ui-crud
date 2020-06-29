import gql from 'graphql-tag';

export default gql`
  fragment InAppSubscription on InAppSubscription {
    _id
    os
    device
    deviceId
    deviceType
    userAgent
    referrer
    ip
    host
    userId
    productId
    transactionId
    transactionDate
    transactionReceipt
    purchaseToken
    dataAndroid
    signatureAndroid
    autoRenewingAndroid
    purchaseStateAndroid
    originalTransactionDateIOS
    originalTransactionIdentifierIOS
    isAcknowledgedAndroid
    verified
    isTrialPeriod
  }
`;
