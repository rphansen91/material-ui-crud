import gql from 'graphql-tag';

export default gql`
  mutation LocationPing(
    $locations: [BackgroundLocationInput!]!
    $userInfo: CardUserInfoInput
  ) {
    locationPing(locations: $locations)
  }
`;
