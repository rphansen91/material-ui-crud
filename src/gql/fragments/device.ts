import gql from 'graphql-tag';

export default gql`
  fragment CardUserDevice on CardUserDevice {
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
    active
    hidden
    email
    date
  }
`;
