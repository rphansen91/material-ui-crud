import gql from 'graphql-tag';

export default gql`
  query CardUserList(
    $searchText: String
    $filter: CardUserFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    cardUserList(
      searchText: $searchText
      filter: $filter
      pagination: $pagination
      sort: $sort
    ) {
      total
      data {
        email
        userId
        photoURL
        displayName
        date
      }
    }
  }
`;
