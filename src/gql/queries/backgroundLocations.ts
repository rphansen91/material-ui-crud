import gql from 'graphql-tag';

export default gql`
  query BackgroundLocations(
    $filter: BackgroundLocationFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    backgroundLocations(filter: $filter, pagination: $pagination, sort: $sort) {
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
`;
