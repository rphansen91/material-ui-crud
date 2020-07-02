import React, { ComponentType, useState } from "react";
import { ConfirmDialog } from "./Confirm";
import { useUpdateContext } from "../Crud";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import { useSelected } from "../Table/Selected";
import { FormComponent } from "../Form";

export function UpdateDialog<V>({ form: Form }: { form: FormComponent<V> }) {
  const [validateError, setValidateError] = useState("");
  const [{ selected }, { setSelected }] = useSelected();
  const {
    updateItem,
    setUpdateItem,
    setUpdateItemValue,
    onUpdate,
    updating,
  } = useUpdateContext<V>();
  const onConfirm = () => {
    if (onUpdate && !updating) {
      setValidateError("");
      onUpdate(updateItem)
        .then(() => setUpdateItem?.(null))
        .then(() => setSelected([]))
        .catch((e) => setValidateError(e.message));
    }
  };
  return (
    <ConfirmDialog
      title="Update"
      open={!!updateItem}
      loading={!!updating}
      onClose={() => setUpdateItem?.(null)}
      onConfirm={onConfirm}
    >
      <DialogContent>
        <Form
          values={updateItem}
          onSubmit={onConfirm}
          setValue={(k, v) => setUpdateItemValue?.(k, v)}
        />
        <Typography color="error">{validateError}</Typography>
      </DialogContent>
    </ConfirmDialog>
  );
}
