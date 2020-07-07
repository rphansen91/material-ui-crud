import React, { createContext, useContext, useState, FC } from "react";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const sortState = {
  field: "",
  order: -1,
};
const sortActions = (field: string, order: number) => {
  console.warn("SortProvider not found");
};
export type ISortContext = [typeof sortState, typeof sortActions | undefined];
export const SortContext = createContext<ISortContext>([
  sortState,
  undefined,
  // sortActions,
]);

export const SortProvider: FC = ({ children }) => {
  const [sort, setSort] = useState(sortState);
  const action = (field: string, order = 1) => {
    setSort({ field, order });
  };
  return (
    <SortContext.Provider value={[sort, action]}>
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => useContext(SortContext);

export const HeadSortCell: FC<TableCellProps & { field: string }> = ({
  field,
  align,
  padding,
  children,
}) => {
  const [sort, setSort] = useSort();
  const active = field === sort.field;
  const sortDirection = active
    ? sort.order === -1
      ? "desc"
      : "asc"
    : undefined;
  const handleSort = () => {
    setSort?.(field, sort.order === -1 ? 1 : -1);
  };
  const label = setSort ? (
    <TableSortLabel
      active={active}
      direction={sortDirection}
      onClick={handleSort}
    >
      {children}
    </TableSortLabel>
  ) : (
    children
  );
  return (
    <TableCell align={align} padding={padding} sortDirection={sortDirection}>
      {label}
    </TableCell>
  );
};
