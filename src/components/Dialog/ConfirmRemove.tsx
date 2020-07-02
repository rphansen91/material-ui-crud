import React from "react";
import { ConfirmDialog } from "./Confirm";
import { useRemoveContext } from "../Crud";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useSelected } from "../Table/Selected";

export const ConfirmRemoveDialog = () => {
  const [{ selected }, { setSelected }] = useSelected();
  const {
    confirmRemove,
    removing,
    setConfirmRemove,
    onRemoveMany,
    removeError,
  } = useRemoveContext();
  return (
    <ConfirmDialog
      title="Confirm Remove"
      open={!!confirmRemove}
      loading={!!removing}
      onClose={() => setConfirmRemove?.(false)}
      onConfirm={() => {
        if (onRemoveMany && selected) {
          onRemoveMany(selected)
            .then(() => setConfirmRemove?.(false))
            .then(() => setSelected([]));
        }
      }}
    >
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete {selected?.length ?? 0} item
          {selected?.length === 1 ? "" : "s"}
          <Typography color="error">{removeError}</Typography>
        </DialogContentText>
      </DialogContent>
    </ConfirmDialog>
  );
};
