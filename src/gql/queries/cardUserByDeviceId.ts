import gql from 'graphql-tag';

export default gql`
  query CardUserByDeviceId($deviceId: String!) {
    cardUserByDeviceId(deviceId: $deviceId) {
      email
      userId
      deviceId
      userAgent
      userId
    }
  }
`;
