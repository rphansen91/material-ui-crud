import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** Mongo Object Id */
  ObjectId: any;
};

export type Pagination = {
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Sort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};



export type IntFilter = {
  EQ?: Maybe<Scalars['Int']>;
  GT?: Maybe<Scalars['Int']>;
  GTE?: Maybe<Scalars['Int']>;
  IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Int']>>>;
  LT?: Maybe<Scalars['Int']>;
  LTE?: Maybe<Scalars['Int']>;
  NE?: Maybe<Scalars['Int']>;
  NIN?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FloatFilter = {
  EQ?: Maybe<Scalars['Float']>;
  GT?: Maybe<Scalars['Float']>;
  GTE?: Maybe<Scalars['Float']>;
  IN?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Float']>>>;
  LT?: Maybe<Scalars['Float']>;
  LTE?: Maybe<Scalars['Float']>;
  NE?: Maybe<Scalars['Float']>;
  NIN?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type StringFilter = {
  EQ?: Maybe<Scalars['String']>;
  GT?: Maybe<Scalars['String']>;
  GTE?: Maybe<Scalars['String']>;
  IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['String']>>>;
  LT?: Maybe<Scalars['String']>;
  LTE?: Maybe<Scalars['String']>;
  NE?: Maybe<Scalars['String']>;
  NIN?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DateFilter = {
  EQ?: Maybe<Scalars['Date']>;
  GT?: Maybe<Scalars['Date']>;
  GTE?: Maybe<Scalars['Date']>;
  IN?: Maybe<Array<Maybe<Scalars['Date']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Date']>>>;
  LT?: Maybe<Scalars['Date']>;
  LTE?: Maybe<Scalars['Date']>;
  NE?: Maybe<Scalars['Date']>;
  NIN?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type ObjectIdFilter = {
  EQ?: Maybe<Scalars['ObjectId']>;
  GT?: Maybe<Scalars['ObjectId']>;
  GTE?: Maybe<Scalars['ObjectId']>;
  IN?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  LT?: Maybe<Scalars['ObjectId']>;
  LTE?: Maybe<Scalars['ObjectId']>;
  NE?: Maybe<Scalars['ObjectId']>;
  NIN?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type Mountain = {
  __typename?: 'Mountain';
  id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  empty?: Maybe<Scalars['String']>;
  findMountains: MountainPage;
  findMountainById?: Maybe<Mountain>;
  findMountainsByIds?: Maybe<Array<Maybe<Mountain>>>;
};


export type QueryFindMountainsArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
  filter?: Maybe<MountainFilter>;
};


export type QueryFindMountainByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryFindMountainsByIdsArgs = {
  ids: Array<Scalars['ObjectId']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  empty?: Maybe<Scalars['String']>;
  insertMountain?: Maybe<Mountain>;
  insertManyMountains?: Maybe<Array<Maybe<Mountain>>>;
  updateMountain?: Maybe<Mountain>;
  updateManyMountains?: Maybe<Array<Maybe<Mountain>>>;
  removeMountain?: Maybe<Mountain>;
  removeManyMountains?: Maybe<Array<Maybe<Mountain>>>;
};


export type MutationInsertMountainArgs = {
  mountain: MountainInsert;
};


export type MutationInsertManyMountainsArgs = {
  mountains: Array<MountainInsert>;
};


export type MutationUpdateMountainArgs = {
  id: Scalars['ObjectId'];
  mountainSet?: Maybe<MountainSet>;
};


export type MutationUpdateManyMountainsArgs = {
  ids: Array<Scalars['ObjectId']>;
  mountainSet?: Maybe<MountainSet>;
};


export type MutationRemoveMountainArgs = {
  id: Scalars['ObjectId'];
};


export type MutationRemoveManyMountainsArgs = {
  ids: Array<Scalars['ObjectId']>;
};

export type MountainPage = {
  __typename?: 'MountainPage';
  total?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<Mountain>>>;
};

export type MountainFilter = {
  name?: Maybe<StringFilter>;
  meters?: Maybe<FloatFilter>;
  feet?: Maybe<FloatFilter>;
  location?: Maybe<StringFilter>;
};

export type MountainInsert = {
  name?: Maybe<Scalars['String']>;
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
};

export type MountainSet = {
  name?: Maybe<Scalars['String']>;
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
};

export type MountainFragment = (
  { __typename?: 'Mountain' }
  & Pick<Mountain, 'id' | 'name' | 'meters' | 'feet' | 'location'>
);

export type InsertMountainMutationVariables = Exact<{
  mountain: MountainInsert;
}>;


export type InsertMountainMutation = (
  { __typename?: 'Mutation' }
  & { insertMountain?: Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )> }
);

export type InsertManyMountainMutationVariables = Exact<{
  mountains: Array<MountainInsert>;
}>;


export type InsertManyMountainMutation = (
  { __typename?: 'Mutation' }
  & { insertManyMountains?: Maybe<Array<Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )>>> }
);

export type UpdateMountainMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  mountainSet?: Maybe<MountainSet>;
}>;


export type UpdateMountainMutation = (
  { __typename?: 'Mutation' }
  & { updateMountain?: Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )> }
);

export type UpdateManyMountainsMutationVariables = Exact<{
  ids: Array<Scalars['ObjectId']>;
  mountainSet?: Maybe<MountainSet>;
}>;


export type UpdateManyMountainsMutation = (
  { __typename?: 'Mutation' }
  & { updateManyMountains?: Maybe<Array<Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )>>> }
);

export type RemoveMountainMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type RemoveMountainMutation = (
  { __typename?: 'Mutation' }
  & { removeMountain?: Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )> }
);

export type RemoveManyMountainsMutationVariables = Exact<{
  ids: Array<Scalars['ObjectId']>;
}>;


export type RemoveManyMountainsMutation = (
  { __typename?: 'Mutation' }
  & { removeManyMountains?: Maybe<Array<Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )>>> }
);

export type FindMountainByIdQueryVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type FindMountainByIdQuery = (
  { __typename?: 'Query' }
  & { findMountainById?: Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )> }
);

export type FindMountainsByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ObjectId']>;
}>;


export type FindMountainsByIdsQuery = (
  { __typename?: 'Query' }
  & { findMountainsByIds?: Maybe<Array<Maybe<(
    { __typename?: 'Mountain' }
    & MountainFragment
  )>>> }
);

export type FindMountainsQueryVariables = Exact<{
  filter?: Maybe<MountainFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type FindMountainsQuery = (
  { __typename?: 'Query' }
  & { findMountains: (
    { __typename?: 'MountainPage' }
    & Pick<MountainPage, 'total'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'Mountain' }
      & MountainFragment
    )>>> }
  ) }
);

export const MountainFragmentDoc = gql`
    fragment Mountain on Mountain {
  id
  name
  meters
  feet
  location
}
    `;
export const InsertMountainDocument = gql`
    mutation insertMountain($mountain: MountainInsert!) {
  insertMountain(mountain: $mountain) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type InsertMountainMutationFn = ApolloReactCommon.MutationFunction<InsertMountainMutation, InsertMountainMutationVariables>;
export type InsertMountainComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertMountainMutation, InsertMountainMutationVariables>, 'mutation'>;

    export const InsertMountainComponent = (props: InsertMountainComponentProps) => (
      <ApolloReactComponents.Mutation<InsertMountainMutation, InsertMountainMutationVariables> mutation={InsertMountainDocument} {...props} />
    );
    

/**
 * __useInsertMountainMutation__
 *
 * To run a mutation, you first call `useInsertMountainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMountainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMountainMutation, { data, loading, error }] = useInsertMountainMutation({
 *   variables: {
 *      mountain: // value for 'mountain'
 *   },
 * });
 */
export function useInsertMountainMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertMountainMutation, InsertMountainMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertMountainMutation, InsertMountainMutationVariables>(InsertMountainDocument, baseOptions);
      }
export type InsertMountainMutationHookResult = ReturnType<typeof useInsertMountainMutation>;
export type InsertMountainMutationResult = ApolloReactCommon.MutationResult<InsertMountainMutation>;
export type InsertMountainMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertMountainMutation, InsertMountainMutationVariables>;
export const InsertManyMountainDocument = gql`
    mutation InsertManyMountain($mountains: [MountainInsert!]!) {
  insertManyMountains(mountains: $mountains) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type InsertManyMountainMutationFn = ApolloReactCommon.MutationFunction<InsertManyMountainMutation, InsertManyMountainMutationVariables>;
export type InsertManyMountainComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertManyMountainMutation, InsertManyMountainMutationVariables>, 'mutation'>;

    export const InsertManyMountainComponent = (props: InsertManyMountainComponentProps) => (
      <ApolloReactComponents.Mutation<InsertManyMountainMutation, InsertManyMountainMutationVariables> mutation={InsertManyMountainDocument} {...props} />
    );
    

/**
 * __useInsertManyMountainMutation__
 *
 * To run a mutation, you first call `useInsertManyMountainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManyMountainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManyMountainMutation, { data, loading, error }] = useInsertManyMountainMutation({
 *   variables: {
 *      mountains: // value for 'mountains'
 *   },
 * });
 */
export function useInsertManyMountainMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertManyMountainMutation, InsertManyMountainMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertManyMountainMutation, InsertManyMountainMutationVariables>(InsertManyMountainDocument, baseOptions);
      }
export type InsertManyMountainMutationHookResult = ReturnType<typeof useInsertManyMountainMutation>;
export type InsertManyMountainMutationResult = ApolloReactCommon.MutationResult<InsertManyMountainMutation>;
export type InsertManyMountainMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertManyMountainMutation, InsertManyMountainMutationVariables>;
export const UpdateMountainDocument = gql`
    mutation updateMountain($id: ObjectId!, $mountainSet: MountainSet) {
  updateMountain(id: $id, mountainSet: $mountainSet) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type UpdateMountainMutationFn = ApolloReactCommon.MutationFunction<UpdateMountainMutation, UpdateMountainMutationVariables>;
export type UpdateMountainComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMountainMutation, UpdateMountainMutationVariables>, 'mutation'>;

    export const UpdateMountainComponent = (props: UpdateMountainComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMountainMutation, UpdateMountainMutationVariables> mutation={UpdateMountainDocument} {...props} />
    );
    

/**
 * __useUpdateMountainMutation__
 *
 * To run a mutation, you first call `useUpdateMountainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMountainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMountainMutation, { data, loading, error }] = useUpdateMountainMutation({
 *   variables: {
 *      id: // value for 'id'
 *      mountainSet: // value for 'mountainSet'
 *   },
 * });
 */
export function useUpdateMountainMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMountainMutation, UpdateMountainMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMountainMutation, UpdateMountainMutationVariables>(UpdateMountainDocument, baseOptions);
      }
export type UpdateMountainMutationHookResult = ReturnType<typeof useUpdateMountainMutation>;
export type UpdateMountainMutationResult = ApolloReactCommon.MutationResult<UpdateMountainMutation>;
export type UpdateMountainMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMountainMutation, UpdateMountainMutationVariables>;
export const UpdateManyMountainsDocument = gql`
    mutation updateManyMountains($ids: [ObjectId!]!, $mountainSet: MountainSet) {
  updateManyMountains(ids: $ids) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type UpdateManyMountainsMutationFn = ApolloReactCommon.MutationFunction<UpdateManyMountainsMutation, UpdateManyMountainsMutationVariables>;
export type UpdateManyMountainsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateManyMountainsMutation, UpdateManyMountainsMutationVariables>, 'mutation'>;

    export const UpdateManyMountainsComponent = (props: UpdateManyMountainsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateManyMountainsMutation, UpdateManyMountainsMutationVariables> mutation={UpdateManyMountainsDocument} {...props} />
    );
    

/**
 * __useUpdateManyMountainsMutation__
 *
 * To run a mutation, you first call `useUpdateManyMountainsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyMountainsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyMountainsMutation, { data, loading, error }] = useUpdateManyMountainsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      mountainSet: // value for 'mountainSet'
 *   },
 * });
 */
export function useUpdateManyMountainsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyMountainsMutation, UpdateManyMountainsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyMountainsMutation, UpdateManyMountainsMutationVariables>(UpdateManyMountainsDocument, baseOptions);
      }
export type UpdateManyMountainsMutationHookResult = ReturnType<typeof useUpdateManyMountainsMutation>;
export type UpdateManyMountainsMutationResult = ApolloReactCommon.MutationResult<UpdateManyMountainsMutation>;
export type UpdateManyMountainsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyMountainsMutation, UpdateManyMountainsMutationVariables>;
export const RemoveMountainDocument = gql`
    mutation removeMountain($id: ObjectId!) {
  removeMountain(id: $id) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type RemoveMountainMutationFn = ApolloReactCommon.MutationFunction<RemoveMountainMutation, RemoveMountainMutationVariables>;
export type RemoveMountainComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveMountainMutation, RemoveMountainMutationVariables>, 'mutation'>;

    export const RemoveMountainComponent = (props: RemoveMountainComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveMountainMutation, RemoveMountainMutationVariables> mutation={RemoveMountainDocument} {...props} />
    );
    

/**
 * __useRemoveMountainMutation__
 *
 * To run a mutation, you first call `useRemoveMountainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMountainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMountainMutation, { data, loading, error }] = useRemoveMountainMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveMountainMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveMountainMutation, RemoveMountainMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveMountainMutation, RemoveMountainMutationVariables>(RemoveMountainDocument, baseOptions);
      }
export type RemoveMountainMutationHookResult = ReturnType<typeof useRemoveMountainMutation>;
export type RemoveMountainMutationResult = ApolloReactCommon.MutationResult<RemoveMountainMutation>;
export type RemoveMountainMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveMountainMutation, RemoveMountainMutationVariables>;
export const RemoveManyMountainsDocument = gql`
    mutation removeManyMountains($ids: [ObjectId!]!) {
  removeManyMountains(ids: $ids) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type RemoveManyMountainsMutationFn = ApolloReactCommon.MutationFunction<RemoveManyMountainsMutation, RemoveManyMountainsMutationVariables>;
export type RemoveManyMountainsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveManyMountainsMutation, RemoveManyMountainsMutationVariables>, 'mutation'>;

    export const RemoveManyMountainsComponent = (props: RemoveManyMountainsComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveManyMountainsMutation, RemoveManyMountainsMutationVariables> mutation={RemoveManyMountainsDocument} {...props} />
    );
    

/**
 * __useRemoveManyMountainsMutation__
 *
 * To run a mutation, you first call `useRemoveManyMountainsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyMountainsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyMountainsMutation, { data, loading, error }] = useRemoveManyMountainsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyMountainsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveManyMountainsMutation, RemoveManyMountainsMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveManyMountainsMutation, RemoveManyMountainsMutationVariables>(RemoveManyMountainsDocument, baseOptions);
      }
export type RemoveManyMountainsMutationHookResult = ReturnType<typeof useRemoveManyMountainsMutation>;
export type RemoveManyMountainsMutationResult = ApolloReactCommon.MutationResult<RemoveManyMountainsMutation>;
export type RemoveManyMountainsMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveManyMountainsMutation, RemoveManyMountainsMutationVariables>;
export const FindMountainByIdDocument = gql`
    query findMountainById($id: ObjectId!) {
  findMountainById(id: $id) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type FindMountainByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindMountainByIdQuery, FindMountainByIdQueryVariables>, 'query'> & ({ variables: FindMountainByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindMountainByIdComponent = (props: FindMountainByIdComponentProps) => (
      <ApolloReactComponents.Query<FindMountainByIdQuery, FindMountainByIdQueryVariables> query={FindMountainByIdDocument} {...props} />
    );
    

/**
 * __useFindMountainByIdQuery__
 *
 * To run a query within a React component, call `useFindMountainByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMountainByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMountainByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindMountainByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMountainByIdQuery, FindMountainByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindMountainByIdQuery, FindMountainByIdQueryVariables>(FindMountainByIdDocument, baseOptions);
      }
export function useFindMountainByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMountainByIdQuery, FindMountainByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindMountainByIdQuery, FindMountainByIdQueryVariables>(FindMountainByIdDocument, baseOptions);
        }
export type FindMountainByIdQueryHookResult = ReturnType<typeof useFindMountainByIdQuery>;
export type FindMountainByIdLazyQueryHookResult = ReturnType<typeof useFindMountainByIdLazyQuery>;
export type FindMountainByIdQueryResult = ApolloReactCommon.QueryResult<FindMountainByIdQuery, FindMountainByIdQueryVariables>;
export const FindMountainsByIdsDocument = gql`
    query findMountainsByIds($ids: [ObjectId!]!) {
  findMountainsByIds(ids: $ids) {
    ...Mountain
  }
}
    ${MountainFragmentDoc}`;
export type FindMountainsByIdsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables>, 'query'> & ({ variables: FindMountainsByIdsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindMountainsByIdsComponent = (props: FindMountainsByIdsComponentProps) => (
      <ApolloReactComponents.Query<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables> query={FindMountainsByIdsDocument} {...props} />
    );
    

/**
 * __useFindMountainsByIdsQuery__
 *
 * To run a query within a React component, call `useFindMountainsByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMountainsByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMountainsByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useFindMountainsByIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables>) {
        return ApolloReactHooks.useQuery<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables>(FindMountainsByIdsDocument, baseOptions);
      }
export function useFindMountainsByIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables>(FindMountainsByIdsDocument, baseOptions);
        }
export type FindMountainsByIdsQueryHookResult = ReturnType<typeof useFindMountainsByIdsQuery>;
export type FindMountainsByIdsLazyQueryHookResult = ReturnType<typeof useFindMountainsByIdsLazyQuery>;
export type FindMountainsByIdsQueryResult = ApolloReactCommon.QueryResult<FindMountainsByIdsQuery, FindMountainsByIdsQueryVariables>;
export const FindMountainsDocument = gql`
    query findMountains($filter: MountainFilter, $pagination: Pagination, $sort: Sort) {
  findMountains(filter: $filter, pagination: $pagination, sort: $sort) {
    total
    data {
      ...Mountain
    }
  }
}
    ${MountainFragmentDoc}`;
export type FindMountainsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindMountainsQuery, FindMountainsQueryVariables>, 'query'>;

    export const FindMountainsComponent = (props: FindMountainsComponentProps) => (
      <ApolloReactComponents.Query<FindMountainsQuery, FindMountainsQueryVariables> query={FindMountainsDocument} {...props} />
    );
    

/**
 * __useFindMountainsQuery__
 *
 * To run a query within a React component, call `useFindMountainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMountainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMountainsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFindMountainsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMountainsQuery, FindMountainsQueryVariables>) {
        return ApolloReactHooks.useQuery<FindMountainsQuery, FindMountainsQueryVariables>(FindMountainsDocument, baseOptions);
      }
export function useFindMountainsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMountainsQuery, FindMountainsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindMountainsQuery, FindMountainsQueryVariables>(FindMountainsDocument, baseOptions);
        }
export type FindMountainsQueryHookResult = ReturnType<typeof useFindMountainsQuery>;
export type FindMountainsLazyQueryHookResult = ReturnType<typeof useFindMountainsLazyQuery>;
export type FindMountainsQueryResult = ApolloReactCommon.QueryResult<FindMountainsQuery, FindMountainsQueryVariables>;