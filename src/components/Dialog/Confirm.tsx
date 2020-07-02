import React, { ReactNode, FC } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { LoadingButton } from "components/Buttons/Loading";

export interface ConfirmDialogProps {
  title: ReactNode;
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cancelText?: ReactNode;
  confirmText?: ReactNode;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  open,
  title,
  children,
  loading,
  onClose,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title ? <DialogTitle>{title}</DialogTitle> : null}
      {children}
      <DialogActions>
        <LoadingButton onClick={onClose}>{cancelText}</LoadingButton>
        <LoadingButton
          onClick={onConfirm}
          loading={loading}
          variant="contained"
        >
          {confirmText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
