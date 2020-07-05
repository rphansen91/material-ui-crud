import { useQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import React, { createContext, ReactNode, useContext, useMemo } from "react";
import {
  selectFindData as defaultSelectFindData,
  selectFindTotal as defaultSelectFindTotal,
} from "../utils";

export type IFindContext<V = any, A = any> = {
  data: V[];
  total: number;
  loading: boolean;
  error: string;
  findDocument?: DocumentNode;
  variables?: A;
};

export const FindContext = createContext<IFindContext>({
  data: [],
  total: 0,
  error: "",
  loading: false,
});

export function useFindContext<V>(): IFindContext<V> {
  return useContext(FindContext);
}

export type FindProviderProps<V> = {
  typeName: string;
  variables: any;
  children: ReactNode;
  findDocument: DocumentNode;
  selectFindData?: typeof defaultSelectFindData;
  selectFindTotal?: typeof defaultSelectFindTotal;
};

export function FindContextProvider<V>({
  children,
  typeName,
  variables,
  findDocument,
  selectFindData = defaultSelectFindData,
  selectFindTotal = defaultSelectFindTotal,
}: FindProviderProps<V>) {
  const find = useQuery(findDocument, { variables });
  const findContext = useMemo(
    () => ({
      total: selectFindTotal(typeName, find.data),
      data: selectFindData(typeName, find.data),
      error: find.error?.message ?? "",
      loading: find.loading,
      findDocument,
      variables,
    }),
    [find.data, find.error, find.loading, findDocument, variables]
  );
  return (
    <FindContext.Provider value={findContext}>{children}</FindContext.Provider>
  );
}
