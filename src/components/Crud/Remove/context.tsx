import { useMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { useFindContext } from "../Find";
import { selectRemoveCacheWrite as defaultSelectRemoveCacheWrite } from "../utils";
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

export type IRemoveContext<V = any> = {
  // Remove state
  idField?: string;
  typeName?: string;
  removeItem?: V | null;
  removing?: boolean;
  removeError?: string;

  setRemoveItem?: Dispatch<SetStateAction<V | null>>;
  onRemove?: (item: V) => Promise<any>;
};

export const RemoveContext = createContext<IRemoveContext>({});

export function useRemoveContext<V>(): IRemoveContext<V> {
  return useContext(RemoveContext);
}
export type RemoveProviderProps<V> = {
  idField?: string;
  typeName: string;
  children: ReactNode;
  removeDocument: DocumentNode;
  selectRemoveCacheWrite?: typeof defaultSelectRemoveCacheWrite;
};

export function RemoveContextProvider<V>({
  idField = "id",
  typeName,
  children,
  removeDocument,
  selectRemoveCacheWrite = defaultSelectRemoveCacheWrite,
}: RemoveProviderProps<V>) {
  const [removeItem, setRemoveItem] = useState<V | null>(null);
  const [removeOne, remove] = useMutation(removeDocument);
  const { findDocument, variables } = useFindContext();
  const onRemove = useCallback(
    async (item: V) => {
      const id = item?.[idField];
      return removeOne({
        variables: { id },
        // optimisticResponse: {
        //   [removeManyField]: items,
        // },
        update: (cache) => {
          if (findDocument) {
            const prev: any = cache.readQuery({
              query: findDocument,
              variables,
            });
            const data = selectRemoveCacheWrite(typeName, prev, id, idField);
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
    [variables, removeOne, findDocument, typeName, idField]
  );
  const removeContext = useMemo(
    () => ({
      idField,
      typeName,
      removeItem,
      setRemoveItem,
      removing: remove.loading,
      removeError: remove.error?.message ?? "",
      onRemove,
    }),
    [
      idField,
      typeName,
      removeItem,
      setRemoveItem,
      remove.loading,
      remove.error,
      onRemove,
    ]
  );
  return (
    <RemoveContext.Provider value={removeContext}>
      {children}
    </RemoveContext.Provider>
  );
}
