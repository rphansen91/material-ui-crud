import React from "react";
import { FindContextProvider, FindProviderProps } from "./Find";
import { InsertContextProvider, InsertProviderProps } from "./Insert";
import {
  RemoveManyContextProvider,
  RemoveManyProviderProps,
} from "./RemoveMany";
import { UpdateContextProvider, UpdateProviderProps } from "./Update";

export * from "./Find";
export * from "./Insert";
export * from "./Remove";
export * from "./RemoveMany";
export * from "./Update";

export type CrudProps<V> = FindProviderProps<V> &
  InsertProviderProps<V> &
  UpdateProviderProps<V> &
  RemoveManyProviderProps<V>;

export function CrudProvider<V>({
  idField = "id",
  typeName,
  children,
  variables,
  initialItem,
  findDocument,
  selectFindData,
  selectFindTotal,
  insertDocument,
  selectInsertCacheWrite,
  updateDocument,
  removeManyDocument,
  selectRemoveManyCacheWrite,
  verifyInsert,
  verifyUpdate,
}: CrudProps<V>) {
  return (
    <FindContextProvider
      idField={idField}
      typeName={typeName}
      findDocument={findDocument}
      variables={variables}
      selectFindData={selectFindData}
      selectFindTotal={selectFindTotal}
    >
      <InsertContextProvider
        typeName={typeName}
        insertDocument={insertDocument}
        initialItem={initialItem}
        verifyInsert={verifyInsert}
        selectInsertCacheWrite={selectInsertCacheWrite}
      >
        <UpdateContextProvider
          typeName={typeName}
          updateDocument={updateDocument}
          verifyUpdate={verifyUpdate}
        >
          <RemoveManyContextProvider
            idField={idField}
            typeName={typeName}
            removeManyDocument={removeManyDocument}
            selectRemoveManyCacheWrite={selectRemoveManyCacheWrite}
          >
            {children}
          </RemoveManyContextProvider>
        </UpdateContextProvider>
      </InsertContextProvider>
    </FindContextProvider>
  );
}
