import gql from "graphql-tag";

export const mountainFragment = gql`
  fragment Mountain on Mountain {
    id
    name
    meters
    feet
    location
  }
`;
