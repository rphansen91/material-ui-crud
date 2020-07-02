import React from "react";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import { useUpdateContext } from "components/Crud";

export const EditButton = ({ ...props }: IconButtonProps) => {
  return (
    <Tooltip title="Update">
      <IconButton size="small" {...props}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export function UpdateItemButton<V>({ item }: { item: V }) {
  const { setUpdateItem } = useUpdateContext<V>();
  return (
    <EditButton
      onClick={(ev) => {
        ev.stopPropagation();
        setUpdateItem?.(item);
      }}
    />
  );
}
