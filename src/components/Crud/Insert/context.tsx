import { useMutation } from "@apollo/react-hooks";
import { SetFormValue } from "components/Form";
import { DocumentNode } from "graphql";
import { useFindContext } from "../Find";
import { selectInsertCacheWrite as defaultSelectInsertCacheWrite } from "../utils";
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

export type IInsertContext<V = any> = {
  // Insert state
  typeName?: string;
  initialItem?: V;
  insertItem?: V | null;
  inserting?: boolean;
  insertError?: string;

  setInsertItem?: Dispatch<SetStateAction<V | null>>;
  setInsertItemValue?: SetFormValue<V>;
  onInsert?: (item?: V | null) => Promise<any>;
};

export const InsertContext = createContext<IInsertContext>({});

export function useInsertContext<V>(): IInsertContext<V> {
  return useContext(InsertContext);
}

export type InsertProviderProps<V> = {
  typeName: string;
  initialItem: V;
  children: ReactNode;
  insertDocument: DocumentNode;
  verifyInsert: (v?: V | null) => any;
  selectInsertCacheWrite?: typeof defaultSelectInsertCacheWrite;
};

export function InsertContextProvider<V>({
  children,
  initialItem,
  insertDocument,
  selectInsertCacheWrite = defaultSelectInsertCacheWrite,
  verifyInsert,
  typeName,
}: InsertProviderProps<V>) {
  const [insertItem, setInsertItem] = useState(null);
  const [insertOne, insert] = useMutation(insertDocument);
  const { findDocument, variables } = useFindContext();
  const onInsert = useCallback(
    async (v: V) => {
      return insertOne({
        variables: verifyInsert(v),
        update: (cache, result) => {
          if (findDocument && selectInsertCacheWrite) {
            const prev: any = cache.readQuery({
              query: findDocument,
              variables,
            });
            const data = selectInsertCacheWrite(typeName, prev, result);
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
    [
      typeName,
      insertOne,
      verifyInsert,
      selectInsertCacheWrite,
      variables,
      findDocument,
    ]
  );
  const insertContext = useMemo(
    () => ({
      typeName,
      initialItem,
      insertItem,
      setInsertItem,
      setInsertItemValue: (k: string, v: any) =>
        setInsertItem?.((values: any) => ({ ...values, [k]: v })),
      inserting: insert.loading,
      insertError: insert.error?.message ?? "",
      onInsert,
    }),
    [
      typeName,
      initialItem,
      insertItem,
      setInsertItem,
      insert.loading,
      insert.error,
      onInsert,
    ]
  );
  return (
    <InsertContext.Provider value={insertContext}>
      {children}
    </InsertContext.Provider>
  );
}
