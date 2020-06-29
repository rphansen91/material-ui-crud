import gql from 'graphql-tag';

export default gql`
  fragment InAppSubscriptionError on InAppSubscriptionError {
    _id
    os
    device
    deviceId
    deviceType
    userAgent
    referrer
    ip
    host
    responseCode
    debugMessage
    code
    message
  }
`;
