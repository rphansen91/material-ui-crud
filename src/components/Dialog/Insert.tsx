import React, { FC, ComponentType, useState } from "react";
import { ConfirmDialog } from "./Confirm";
import { useInsertContext } from "../Crud";
import { FormComponent } from "../Form";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import { useSelected } from "../Table/Selected";

export function InsertDialog<V>({ form: Form }: { form: FormComponent<V> }) {
  const [validateError, setValidateError] = useState("");
  const [_, { setSelected }] = useSelected();
  const { insertItem, inserting, setInsertItem, onInsert } = useInsertContext<
    V
  >();
  const onConfirm = () => {
    if (onInsert && !inserting) {
      setValidateError("");
      onInsert(insertItem)
        .then(() => setInsertItem?.(null))
        .then(() => setSelected([]))
        .catch((e) => setValidateError(e.message));
    }
  };
  return (
    <ConfirmDialog
      title="Insert"
      open={!!insertItem}
      loading={!!inserting}
      onClose={() => setInsertItem?.(null)}
      onConfirm={onConfirm}
    >
      <DialogContent>
        <Form
          values={insertItem}
          onSubmit={onConfirm}
          setValue={(k, v) =>
            setInsertItem?.((values: any) => ({ ...values, [k]: v }))
          }
        />
        <Typography color="error">{validateError}</Typography>
      </DialogContent>
    </ConfirmDialog>
  );
}
