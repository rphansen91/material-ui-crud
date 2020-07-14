import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  ChangeEvent,
} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { usePagination } from "./Pagination";
import { useFindContext } from "../Crud";

type ISelectedContext<V = any> = [
  {
    selected?: V[];
  },
  {
    setSelected: (v: V[]) => void;
    toggleSelected: (v: V) => void;
  }
];

export const SelectedContext = createContext<ISelectedContext>([
  {},
  {
    setSelected: (v: any) => {
      console.warn("SelectedProvider not found");
    },
    toggleSelected: (v: any) => {
      console.warn("SelectedProvider not found");
    },
  },
]);

export function SelectedProvider<V>({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<V[]>([]);
  const value = useMemo(() => {
    return [
      { selected },
      {
        setSelected: (s: V[]) => {
          setSelected(s);
        },
        toggleSelected: (v: V) => {
          if (selected.includes(v)) {
            setSelected(selected.filter((s) => s !== v));
          } else {
            setSelected(selected.concat(v));
          }
        },
      },
    ] as ISelectedContext;
  }, [selected]);
  return (
    <SelectedContext.Provider value={value}>
      {children}
    </SelectedContext.Provider>
  );
}

export function useSelected<V = any>() {
  return useContext(SelectedContext) as ISelectedContext<V>;
}

export interface CheckboxHeaderRowProps {
  children?: ReactNode;
}

export function CheckboxHeaderRow<V = any>({
  children,
}: CheckboxHeaderRowProps) {
  const [{ selected }, { setSelected }] = useSelected<V>();
  const [{ perPage }] = usePagination();
  const { total, data } = useFindContext<V[]>();
  const onSelectAllClick = () => {
    setSelected(data.filter((item) => !selected?.includes(item)));
  };
  return (
    <TableRow>
      {selected ? (
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={selected.length > 0 && selected.length < total}
            checked={total > 0 && selected.length === perPage}
            onChange={() => onSelectAllClick()}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
      ) : null}
      {children}
    </TableRow>
  );
}

export function CheckboxRow<V = any>({
  item,
  children,
  labelId,
  name = "name",
}: {
  item: V;
  children: ReactNode;
  labelId: string;
  name?: string;
}) {
  const [{ selected }, { setSelected, toggleSelected }] = useSelected<V>();
  const isSelected = selected?.includes(item) ?? false;
  return (
    <TableRow hover onClick={() => toggleSelected(item)} selected={isSelected}>
      {selected ? (
        <TableCell padding="checkbox">
          <Checkbox
            checked={isSelected}
            inputProps={{ "aria-labelledby": labelId }}
            onChange={() => toggleSelected(item)}
          />
        </TableCell>
      ) : null}
      <TableCell component="th" id={labelId} scope="row">
        {item[name]}
      </TableCell>
      {children}
    </TableRow>
  );
}
