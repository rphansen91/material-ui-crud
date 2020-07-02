import React, { ComponentType } from "react";
import { TableCard, TableToolbar, Table } from "../Table";
import { ConfirmRemoveDialog, InsertDialog, UpdateDialog } from "../Dialog";
import { FormComponent } from "components/Form";

export * from "./context";

export type CrudTableProps<V> = {
  title: string;
  form: FormComponent<V>;
  head: ComponentType;
  renderRow: (v: V | null, i: number) => React.ReactNode;
};

export function CrudTable<V>({
  title,
  head: Head,
  form: Form,
  renderRow,
}: CrudTableProps<V>) {
  return (
    <>
      <TableCard header={<TableToolbar title={title} />}>
        <Table<V | null> head={<Head />} renderRow={renderRow} />
      </TableCard>
      <ConfirmRemoveDialog />
      <InsertDialog<V> form={Form} />
      <UpdateDialog<V> form={Form} />
    </>
  );
}
