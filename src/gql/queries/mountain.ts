import gql from "graphql-tag";
import { mountainFragment } from "../fragments/mountain";

export const findMountainById = gql`
  query findMountainById($id: ObjectId!) {
    findMountainById(id: $id) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const findMountainsByIds = gql`
  query findMountainsByIds($ids: [ObjectId!]!) {
    findMountainsByIds(ids: $ids) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const findMountains = gql`
  query findMountains(
    $filter: MountainFilter
    $pagination: Pagination
    $sort: Sort
  ) {
    findMountains(filter: $filter, pagination: $pagination, sort: $sort) {
      total
      data {
        ...Mountain
      }
    }
  }

  ${mountainFragment}
`;
