import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { DocumentNode } from "graphql";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { SetFormValue } from "components/Form";

export type IFindContext<V = any, A = any> = {
  data: V[];
  total: number;
  loading: boolean;
  error: string;
  findDocument?: DocumentNode;
  variables?: A;
};

export type IInsertContext<V = any> = {
  // Insert state
  initialItem?: V;
  insertItem?: V | null;
  inserting?: boolean;
  insertError?: string;

  setInsertItem?: Dispatch<SetStateAction<V | null>>;
  setInsertItemValue?: SetFormValue<V>;
  onInsert?: (item?: V | null) => Promise<any>;
};

export type IUpdateContext<V = any> = {
  // Update state
  updateItem?: V | null;
  updating?: boolean;
  updateError?: string;

  setUpdateItem?: Dispatch<SetStateAction<V | null>>;
  setUpdateItemValue?: SetFormValue<V>;
  onUpdate?: (item?: V | null) => Promise<any>;
};

export type IRemoveContext<V = any> = {
  // Remove state
  confirmRemove?: boolean;
  removing?: boolean;
  removeError?: string;

  setConfirmRemove?: Dispatch<SetStateAction<boolean>>;
  onRemoveMany?: (items: V[]) => Promise<any>;
};

export const FindContext = createContext<IFindContext>({
  data: [],
  total: 0,
  error: "",
  loading: false,
});

export const InsertContext = createContext<IInsertContext>({});
export const UpdateContext = createContext<IUpdateContext>({});
export const RemoveContext = createContext<IRemoveContext>({});

export function useFindContext<V>(): IFindContext<V> {
  return useContext(FindContext);
}

export function useInsertContext<V>(): IInsertContext<V> {
  return useContext(InsertContext);
}

export function useUpdateContext<V>(): IUpdateContext<V> {
  return useContext(UpdateContext);
}

export function useRemoveContext<V>(): IRemoveContext<V> {
  return useContext(RemoveContext);
}

export type FindProviderProps<V> = {
  typeName: string;
  variables: any;
  children: ReactNode;
  findDocument: DocumentNode;
};
export type InsertProviderProps<V> = {
  typeName: string;
  initialItem: V;
  children: ReactNode;
  insertDocument: DocumentNode;
  verifyInsert: (v?: V | null) => any;
};
export type UpdateProviderProps<V> = {
  typeName: string;
  children: ReactNode;
  updateDocument: DocumentNode;
  verifyUpdate: (v?: V | null) => any;
};
export type RemoveProviderProps<V> = {
  typeName: string;
  children: ReactNode;
  removeManyDocument: DocumentNode;
};
export type CrudProps<V> = FindProviderProps<V> &
  InsertProviderProps<V> &
  UpdateProviderProps<V> &
  RemoveProviderProps<V>;

export function FindContextProvider<V>({
  children,
  typeName,
  variables,
  findDocument,
}: FindProviderProps<V>) {
  const find = useQuery(findDocument, { variables });
  const total = find.data?.[`find${pluralize(typeName)}`]?.total ?? 0;
  const data = find.data?.[`find${pluralize(typeName)}`]?.data ?? [];
  const findContext = useMemo(
    () => ({
      total,
      data,
      error: find.error?.message ?? "",
      loading: find.loading,
      findDocument,
      variables,
    }),
    [total, data, find.error, find.loading, findDocument, variables]
  );
  return (
    <FindContext.Provider value={findContext}>{children}</FindContext.Provider>
  );
}
export function InsertContextProvider<V>({
  children,
  initialItem,
  insertDocument,
  verifyInsert,
  typeName,
}: InsertProviderProps<V>) {
  const findField = `find${pluralize(typeName)}`;
  const insertedField = `insert${typeName}`;
  const [insertItem, setInsertItem] = useState(null);
  const [insertOne, insert] = useMutation(insertDocument);
  const { findDocument, variables } = useFindContext();
  const onInsert = useCallback(
    async (v: V) => {
      return insertOne({
        variables: verifyInsert(v),
        update: (cache, result) => {
          const inserted = result?.data?.[insertedField];
          if (findDocument && inserted) {
            const prev: any = cache.readQuery({
              query: findDocument,
              variables,
            });
            const prevResult = prev?.[findField];
            const prevData = prevResult?.data ?? [];
            const newData = [].concat(prevData, inserted);
            cache.writeQuery({
              query: findDocument,
              variables,
              data: {
                [findField]: {
                  ...prevResult,
                  data: newData,
                },
              },
            });
          }
        },
      });
    },
    [insertOne, verifyInsert, findField, insertedField, variables, findDocument]
  );
  const insertContext = useMemo(
    () => ({
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
export function UpdateContextProvider<V>({
  children,
  updateDocument,
  verifyUpdate,
}: UpdateProviderProps<V>) {
  const [updateOne, update] = useMutation(updateDocument);
  const [updateItem, setUpdateItem] = useState(null);
  const onUpdate = useCallback(
    async (v: V) => {
      return updateOne({
        variables: verifyUpdate(v),
      });
    },
    [updateOne, verifyUpdate]
  );
  const updateContext = useMemo(
    () => ({
      updateItem,
      setUpdateItem,
      setUpdateItemValue: (k: string, v: any) =>
        setUpdateItem?.((values: any) => ({ ...values, [k]: v })),
      updating: update.loading,
      updateError: update.error?.message ?? "",
      onUpdate,
    }),
    [updateItem, setUpdateItem, update.loading, update.error, onUpdate]
  );
  return (
    <UpdateContext.Provider value={updateContext}>
      {children}
    </UpdateContext.Provider>
  );
}
export function RemoveContextProvider<V>({
  typeName,
  children,
  removeManyDocument,
}: RemoveProviderProps<V>) {
  const findField = `find${pluralize(typeName)}`;
  const removeManyField = `removeMany${pluralize(typeName)}`;
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [removeMany, remove] = useMutation(removeManyDocument);
  const { findDocument, variables } = useFindContext();
  const onRemoveMany = useCallback(
    async (items: V[]) => {
      const ids = items.map((v) => v?.["id"]);
      return removeMany({
        variables: { ids },
        optimisticResponse: {
          [removeManyField]: items,
        },
        update: (cache) => {
          if (findDocument) {
            const prev: any = cache.readQuery({
              query: findDocument,
              variables,
            });
            const prevResult = prev?.[findField];
            const prevData = prevResult?.data ?? [];
            const newData = prevData.filter((v: any) => !ids.includes(v?.id));
            cache.writeQuery({
              query: findDocument,
              variables,
              data: {
                [findField]: {
                  ...prevResult,
                  data: newData,
                },
              },
            });
          }
        },
      });
    },
    [variables, removeMany, findDocument, findField, removeManyField]
  );
  const removeContext = useMemo(
    () => ({
      confirmRemove,
      setConfirmRemove,
      removing: remove.loading,
      removeError: remove.error?.message ?? "",
      onRemoveMany,
    }),
    [
      confirmRemove,
      setConfirmRemove,
      remove.loading,
      remove.error,
      onRemoveMany,
    ]
  );
  return (
    <RemoveContext.Provider value={removeContext}>
      {children}
    </RemoveContext.Provider>
  );
}

export function CrudProvider<V>({
  typeName,
  children,
  variables,
  initialItem,
  findDocument,
  insertDocument,
  updateDocument,
  removeManyDocument,
  verifyInsert,
  verifyUpdate,
}: CrudProps<V>) {
  return (
    <FindContextProvider
      typeName={typeName}
      findDocument={findDocument}
      variables={variables}
    >
      <InsertContextProvider
        typeName={typeName}
        insertDocument={insertDocument}
        initialItem={initialItem}
        verifyInsert={verifyInsert}
      >
        <UpdateContextProvider
          typeName={typeName}
          updateDocument={updateDocument}
          verifyUpdate={verifyUpdate}
        >
          <RemoveContextProvider
            typeName={typeName}
            removeManyDocument={removeManyDocument}
          >
            {children}
          </RemoveContextProvider>
        </UpdateContextProvider>
      </InsertContextProvider>
    </FindContextProvider>
  );
}

function pluralize(str: string) {
  if (str[str.length - 1] === "s") return str;
  return `${str}s`;
}
