import { useMutation } from "@apollo/react-hooks";
import { SetFormValue } from "components/Form";
import { DocumentNode } from "graphql";
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

export type IUpdateContext<V = any> = {
  // Update state
  typeName?: string;
  updateItem?: V | null;
  updating?: boolean;
  updateError?: string;

  setUpdateItem?: Dispatch<SetStateAction<V | null>>;
  setUpdateItemValue?: SetFormValue<V>;
  onUpdate?: (item?: V | null) => Promise<any>;
};

export const UpdateContext = createContext<IUpdateContext>({});

export function useUpdateContext<V>(): IUpdateContext<V> {
  return useContext(UpdateContext);
}

export type UpdateProviderProps<V> = {
  typeName: string;
  children: ReactNode;
  updateDocument: DocumentNode;
  verifyUpdate: (v?: V | null) => any;
};

export function UpdateContextProvider<V>({
  typeName,
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
      typeName,
      updateItem,
      setUpdateItem,
      setUpdateItemValue: (k: string, v: any) =>
        setUpdateItem?.((values: any) => ({ ...values, [k]: v })),
      updating: update.loading,
      updateError: update.error?.message ?? "",
      onUpdate,
    }),
    [
      typeName,
      updateItem,
      setUpdateItem,
      update.loading,
      update.error,
      onUpdate,
    ]
  );
  return (
    <UpdateContext.Provider value={updateContext}>
      {children}
    </UpdateContext.Provider>
  );
}
