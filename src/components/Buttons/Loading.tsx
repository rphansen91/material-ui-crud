import React from "react";
import Fab, { FabProps } from "@material-ui/core/Fab";
import Button, { ButtonProps } from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import cx from "classnames";

export const LoadingButton = ({
  disabled,
  loading,
  children,
  className,
  ...props
}: ButtonProps & { loading?: boolean }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      disabled={disabled || loading}
      className={cx(classes.root, className)}
    >
      {loading ? <LinearProgress className={classes.top} /> : null}
      {children}
    </Button>
  );
};

export const LoadingFab = ({
  disabled,
  loading,
  children,
  className,
  ...props
}: FabProps & { loading?: boolean }) => {
  const classes = useStyles();
  return (
    <Fab
      {...props}
      disabled={disabled || loading}
      className={cx(classes.root, className)}
    >
      {loading ? <CircularProgress className={classes.full} /> : null}
      {children}
    </Fab>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    top: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    full: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  })
);
