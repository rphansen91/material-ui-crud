import React from "react";
import { ConfirmDialog } from "./Confirm";
import { useRemoveManyContext, useRemoveContext } from "../Crud";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useSelected } from "../Table/Selected";

export const ConfirmRemoveManyDialog = () => {
  const [{ selected }, { setSelected }] = useSelected();
  const {
    confirmRemoveMany,
    removingMany,
    setConfirmRemoveMany,
    onRemoveMany,
    removeManyError,
  } = useRemoveManyContext();
  return (
    <ConfirmDialog
      title="Confirm Remove"
      open={!!confirmRemoveMany}
      loading={!!removingMany}
      onClose={() => setConfirmRemoveMany?.(false)}
      onConfirm={() => {
        if (onRemoveMany && selected) {
          onRemoveMany(selected)
            .then(() => setConfirmRemoveMany?.(false))
            .then(() => setSelected([]));
        }
      }}
    >
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete {selected?.length ?? 0} item
          {selected?.length === 1 ? "" : "s"}
          <Typography color="error">{removeManyError}</Typography>
        </DialogContentText>
      </DialogContent>
    </ConfirmDialog>
  );
};

export function ConfirmRemoveDialog<V>({
  getName = (v: V) => "",
}: {
  getName: (v: V) => string;
}) {
  const {
    removeItem,
    removing,
    setRemoveItem,
    onRemove,
    removeError,
  } = useRemoveContext<V>();
  return (
    <ConfirmDialog
      title="Confirm Remove"
      open={!!removeItem}
      loading={!!removing}
      onClose={() => setRemoveItem?.(null)}
      onConfirm={() => {
        if (onRemove && removeItem) {
          onRemove(removeItem).then(() => setRemoveItem?.(null));
        }
      }}
    >
      <DialogContent>
        <DialogContentText>
          Are you sure you would like to delete{" "}
          {removeItem ? getName(removeItem) : null}
          <Typography color="error">{removeError}</Typography>
        </DialogContentText>
      </DialogContent>
    </ConfirmDialog>
  );
}
