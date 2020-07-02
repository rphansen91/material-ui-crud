import gql from "graphql-tag";
import { mountainFragment } from "../fragments/mountain";

export const insertMountain = gql`
  mutation insertMountain($mountain: MountainInsert!) {
    insertMountain(mountain: $mountain) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const insertMountains = gql`
  mutation InsertManyMountain($mountains: [MountainInsert!]!) {
    insertManyMountains(mountains: $mountains) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const updateMountain = gql`
  mutation updateMountain($id: ObjectId!, $mountainSet: MountainSet) {
    updateMountain(id: $id, mountainSet: $mountainSet) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const updateManyMountains = gql`
  mutation updateManyMountains($ids: [ObjectId!]!, $mountainSet: MountainSet) {
    updateManyMountains(ids: $ids) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const removeMountain = gql`
  mutation removeMountain($id: ObjectId!) {
    removeMountain(id: $id) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;

export const removeManyMountains = gql`
  mutation removeManyMountains($ids: [ObjectId!]!) {
    removeManyMountains(ids: $ids) {
      ...Mountain
    }
  }

  ${mountainFragment}
`;
