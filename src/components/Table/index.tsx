import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import MuiTable, { TableProps } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React, { FC, ReactNode } from "react";
import { useFindContext } from "../Crud";
import { Paginate } from "./Pagination";

export * from "./Pagination";
export * from "./Selected";
export * from "./Search";
export * from "./Sort";
export * from "./Toolbar";

export function Table<V>({
  head,
  renderRow,
  ...props
}: TableProps & {
  head: ReactNode;
  renderRow: (v: V, i: number) => ReactNode;
}) {
  const { data } = useFindContext();
  return (
    <MuiTable {...props}>
      <TableHead>{head}</TableHead>
      <TableBody>{data.map(renderRow)}</TableBody>
      <TableFooter>
        <TableRow>
          <Paginate />
        </TableRow>
      </TableFooter>
    </MuiTable>
  );
}

type TableCardProps = {
  header?: ReactNode;
};

export const TableCard: FC<TableCardProps> = ({ header, children }) => {
  const { loading } = useFindContext();
  return (
    <Card>
      {header}
      {loading ? <LinearProgress /> : <Divider />}
      {children}
    </Card>
  );
};
