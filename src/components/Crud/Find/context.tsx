import { useQuery, QueryHookOptions } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import React, { createContext, ReactNode, useContext, useMemo } from "react";
import {
  selectFindData as defaultSelectFindData,
  selectFindTotal as defaultSelectFindTotal,
} from "../utils";

export type IFindContext<V = any, A = any> = Omit<
  Omit<Omit<ReturnType<typeof useQuery>, "error">, "data">,
  "loading"
> & {
  idField?: string;
  typeName?: string;
  data: V;
  total: number;
  loading: boolean;
  error: string;
  findDocument?: DocumentNode;
  variables?: A;
};

export const FindContext = createContext<IFindContext>({
  idField: "id",
  data: [],
  total: 0,
  error: "",
  loading: false,
  variables: {},
  startPolling: () => console.warn("FindContext not supplied"),
  stopPolling: () => console.warn("FindContext not supplied"),
  subscribeToMore: () => {
    throw new Error("FindContext not supplied");
  },
  updateQuery: () => console.warn("FindContext not supplied"),
  refetch: () => {
    throw new Error("FindContext not supplied");
  },
  client: null as any,
  networkStatus: 0,
  called: false,
  fetchMore: () => {
    throw new Error("FindContext not supplied");
  },
});

export function useFindContext<V>(): IFindContext<V> {
  return useContext(FindContext);
}

export type FindProviderProps<V> = {
  idField?: string;
  typeName: string;
  variables: any;
  children: ReactNode;
  findDocument: DocumentNode;
  options?: QueryHookOptions;
  selectFindData?: typeof defaultSelectFindData;
  selectFindTotal?: typeof defaultSelectFindTotal;
};

export function FindContextProvider<V>({
  idField = "id",
  children,
  typeName,
  variables,
  findDocument,
  selectFindData = defaultSelectFindData,
  selectFindTotal = defaultSelectFindTotal,
  options,
}: FindProviderProps<V>) {
  const find = useQuery(findDocument, { variables, ...options });
  const findContext = useMemo(
    () => ({
      ...find,
      idField,
      typeName,
      total: selectFindTotal(typeName, find.data),
      data: selectFindData(typeName, find.data),
      error: find.error?.message ?? "",
      loading: find.loading,
      findDocument,
      variables,
    }),
    [
      idField,
      typeName,
      find.data,
      find.error,
      find.loading,
      findDocument,
      variables,
    ]
  );
  return (
    <FindContext.Provider value={findContext}>{children}</FindContext.Provider>
  );
}
