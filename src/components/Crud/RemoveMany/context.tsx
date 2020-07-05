import { useMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { useFindContext } from "../Find";
import { selectRemoveManyCacheWrite as defaultSelectRemoveManyCacheWrite } from "../utils";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type IRemoveManyContext<V = any> = {
  // Remove state
  idField?: string;
  typeName?: string;
  confirmRemoveMany?: boolean;
  removingMany?: boolean;
  removeManyError?: string;

  setConfirmRemoveMany?: Dispatch<SetStateAction<boolean>>;
  onRemoveMany?: (items: V[]) => Promise<any>;
};

export const RemoveManyContext = createContext<IRemoveManyContext>({});

export function useRemoveManyContext<V>(): IRemoveManyContext<V> {
  return useContext(RemoveManyContext);
}
export type RemoveManyProviderProps<V> = {
  idField?: string;
  typeName: string;
  children: ReactNode;
  removeManyDocument: DocumentNode;
  selectRemoveManyCacheWrite?: typeof defaultSelectRemoveManyCacheWrite;
};

export function RemoveManyContextProvider<V>({
  idField = "id",
  typeName,
  children,
  removeManyDocument,
  selectRemoveManyCacheWrite = defaultSelectRemoveManyCacheWrite,
}: RemoveManyProviderProps<V>) {
  const [confirmRemoveMany, setConfirmRemoveMany] = useState(false);
  const [removeMany, remove] = useMutation(removeManyDocument);
  const { findDocument, variables } = useFindContext();
  const onRemoveMany = useCallback(
    async (items: V[]) => {
      const ids = items.map((v) => v?.[idField]);
      return removeMany({
        variables: { ids },
        // optimisticResponse: {
        //   [removeManyField]: items,
        // },
        update: (cache) => {
          if (findDocument) {
            const prev: any = cache.readQuery({
              query: findDocument,
              variables,
            });
            const data = selectRemoveManyCacheWrite(
              typeName,
              prev,
              ids,
              idField
            );
            if (data) {
              cache.writeQuery({
                query: findDocument,
                variables,
                data,
              });
            }
          }
        },
      });
    },
    [variables, removeMany, findDocument, typeName]
  );
  const removeManyContext = useMemo(
    () => ({
      idField,
      typeName,
      confirmRemoveMany,
      setConfirmRemoveMany,
      removingMany: remove.loading,
      removeManyError: remove.error?.message ?? "",
      onRemoveMany,
    }),
    [
      idField,
      typeName,
      confirmRemoveMany,
      setConfirmRemoveMany,
      remove.loading,
      remove.error,
      onRemoveMany,
    ]
  );
  return (
    <RemoveManyContext.Provider value={removeManyContext}>
      {children}
    </RemoveManyContext.Provider>
  );
}
