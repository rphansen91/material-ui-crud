import gql from 'graphql-tag';

export default gql`
  query CardUserLocations(
    $userId: String
    $filter: BackgroundLocationFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    cardUserById(userId: $userId) {
      backgroundLocations(
        filter: $filter
        pagination: $pagination
        sort: $sort
      ) {
        total
        data {
          _id
          uid
          accuracy
          latitude
          longitude
          altitude
          altitudeAccuracy
          heading
          speed
          timestamp
          yyyymmddhh
          yyyymmdd
          platform
          date
        }
      }
    }
  }
`;
