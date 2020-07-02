import React, {
  createContext,
  useContext,
  useState,
  FC,
  useMemo,
  ChangeEvent,
} from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { useFindContext } from "../Crud";

type PaginationState = {
  page?: number;
  perPage?: number;
};
const paginationState: PaginationState = {
  // page: 1,
  // perPage: 10,
};
const paginationActions = {
  onChangePage: (ev: any, page: number) => {
    console.warn("PaginationProvider not found");
  },
  onChangeRowsPerPage: (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.warn("PaginationProvider not found");
  },
};
type IPaginationContext = [PaginationState, typeof paginationActions];
export const PaginationContext = createContext<IPaginationContext>([
  paginationState,
  paginationActions,
]);

export const PaginationProvider: FC = ({ children }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const value = useMemo(() => {
    return [
      { page, perPage },
      {
        onChangePage: (ev, page) => {
          setPage(page + 1);
        },
        onChangeRowsPerPage: (ev) => {
          setPerPage(Number(ev.target.value));
        },
      },
    ] as IPaginationContext;
  }, [page, perPage]);
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);

export const Paginate = () => {
  const [
    { page, perPage },
    { onChangePage, onChangeRowsPerPage },
  ] = usePagination();
  const { total } = useFindContext();
  if (!page) return null;
  if (!perPage) return null;
  return (
    <TablePagination
      page={page - 1}
      rowsPerPage={perPage}
      count={total}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  );
};
