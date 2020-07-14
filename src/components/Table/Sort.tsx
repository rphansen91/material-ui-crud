import React, { createContext, useContext, useState, FC } from "react";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const sortState = {
  field: "",
  order: -1,
};
const sortActions = {
  setSort: (field: string, order: -1 | 1) => {
    console.warn("SortProvider not found");
  },
};
export type ISortContext = [typeof sortState, typeof sortActions];
export const SortContext = createContext<ISortContext>([
  sortState,
  sortActions,
]);

export const SortProvider: FC<{
  initialField?: string;
  initialOrder?: -1 | 1;
}> = ({ children, initialField = "", initialOrder = -1 }) => {
  const [sort, setState] = useState({
    field: initialField,
    order: initialOrder,
  });
  const actions = {
    setSort: (field: string, order: -1 | 1 = 1) => {
      setState({ field, order });
    },
  };
  return (
    <SortContext.Provider value={[sort, actions]}>
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
  const [sort, { setSort }] = useSort();
  const active = field === sort.field;
  const sortDirection = active
    ? sort.order === -1
      ? "desc"
      : "asc"
    : undefined;
  const handleSort = () => {
    setSort?.(field, sort.order === -1 ? 1 : -1);
  };
  return (
    <TableCell align={align} padding={padding} sortDirection={sortDirection}>
      <TableSortLabel
        active={active}
        direction={sortDirection}
        onClick={handleSort}
      >
        {children}
      </TableSortLabel>
    </TableCell>
  );
};
