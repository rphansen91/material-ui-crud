import IconButton from "@material-ui/core/IconButton";
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import cx from "classnames";
import React from "react";
import { useRemoveManyContext, useInsertContext } from "../Crud";
import { useSelected } from "./Selected";

export function TableToolbar<V>({ title }: { title: string }) {
  const classes = useToolbarStyles();
  const [{ selected }] = useSelected();
  const { onRemoveMany, setConfirmRemoveMany } = useRemoveManyContext<V>();
  const { setInsertItem, initialItem } = useInsertContext<V>();
  const numSelected = selected?.length ?? 0;
  return (
    <Toolbar
      className={cx(classes.root, {
        [classes.highlight]:
          setConfirmRemoveMany && onRemoveMany && numSelected > 0,
      })}
    >
      {setConfirmRemoveMany && onRemoveMany && numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {setConfirmRemoveMany && onRemoveMany && numSelected > 0 ? (
        <Tooltip title="Remover">
          <IconButton
            aria-label="remove"
            onClick={() => setConfirmRemoveMany(true)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Insert item">
            <IconButton
              aria-label="insert item"
              onClick={() => initialItem && setInsertItem?.(initialItem)}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
  })
);
