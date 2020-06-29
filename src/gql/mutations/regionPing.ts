import gql from 'graphql-tag';

export default gql`
  mutation RegionPing(
    $region: BackgroundRegionInput!
    $location: BackgroundLocationInput!
    $userInfo: CardUserInfoInput
  ) {
    regionPing(region: $region, location: $location)
  }
`;
