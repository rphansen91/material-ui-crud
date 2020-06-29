import gql from 'graphql-tag';

export default gql`
  query BackgroundRegions(
    $filter: BackgroundRegionFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    backgroundRegions(filter: $filter, pagination: $pagination, sort: $sort) {
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
        regionIdentifier
        regionLatitude
        regionLongitude
        regionRadius
        regionState
        timestamp
        yyyymmddhh
        yyyymmdd
        date
      }
    }
  }
`;
