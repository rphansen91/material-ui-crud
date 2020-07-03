import { ApolloProvider } from "@apollo/react-hooks";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import LinearProgress from "@material-ui/core/LinearProgress";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { UpdateItemButton } from "../src/components/Buttons/Edit";
import {
  CrudTable,
  CrudProvider,
  useUpdateContext,
  InsertContextProvider,
  UpdateContextProvider,
  RemoveContextProvider,
  useInsertContext,
  useRemoveContext,
} from "../src/components/Crud";
import { ConfirmRemoveDialog } from "../src/components/Dialog/ConfirmRemove";
import { InsertDialog } from "../src/components/Dialog/Insert";
import { UpdateDialog } from "../src/components/Dialog/Update";
import { LoadingButton } from "../src/components/Buttons";
import { SetFormValue } from "../src/components/Form";
import {
  CheckboxHeaderRow,
  CheckboxRow,
  HeadSortCell,
  PaginationProvider,
  SelectedProvider,
  SortProvider,
  Table,
  TableCard,
  TableToolbar,
  usePagination,
  useSort,
} from "../src/components/Table";
import { getClient } from "../src/graphql.client";
import {
  FindMountainsDocument,
  InsertMountainDocument,
  Mountain,
  RemoveManyMountainsDocument,
  UpdateMountainDocument,
  useFindMountainByIdQuery,
} from "../src/graphql.generated";
const CrudTableReadme = require("../src/components/Crud/CrudTableReadme.md");

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const token = localStorage.getItem("token");
const client = getClient(process.env.SCHEMA || "", () => ({
  headers: { "x-auth-token": token },
}));

const Base: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </MuiThemeProvider>
  );
};

storiesOf("Mountains", module)
  .addParameters({
    readme: {},
  })
  .add(
    "Find",
    () => {
      return (
        <Base>
          <PaginationProvider>
            <SortProvider>
              <SelectedProvider>
                <Box p={2}>
                  <FindMountainsTable />
                </Box>
              </SelectedProvider>
            </SortProvider>
          </PaginationProvider>
        </Base>
      );
    },
    {
      readme: {
        codeTheme: "duotone-sea",
        sidebar: CrudTableReadme.default,
      },
    }
  )
  .add("Insert", () => {
    return (
      <Base>
        <InsertContextProvider<Mountain | null>
          typeName="Mountain"
          insertDocument={InsertMountainDocument}
          initialItem={initialMountain}
          verifyInsert={verifyInsert}
        >
          <Box p={2}>
            <MountainFormInsert />
          </Box>
        </InsertContextProvider>
      </Base>
    );
  })
  .add("Update", () => {
    return (
      <Base>
        <UpdateContextProvider<Mountain | null>
          typeName="Mountain"
          updateDocument={UpdateMountainDocument}
          verifyUpdate={verifyUpdate}
        >
          <Box p={2}>
            <MountainFormUpdate id="5ef9228676b2b516e66dcacc" />
          </Box>
        </UpdateContextProvider>
      </Base>
    );
  })
  .add("Remove", () => {
    return (
      <Base>
        <RemoveContextProvider<Mountain | null>
          typeName="Mountain"
          removeManyDocument={RemoveManyMountainsDocument}
        >
          <Box p={2}>
            <MountainDetails id="5ef9228676b2b516e66dcacc" />
          </Box>
        </RemoveContextProvider>
      </Base>
    );
  });

const initialMountain: Mountain = {
  name: "",
  location: "",
  meters: 0,
  feet: 0,
};

const verifyMountainInput = (mountain?: Mountain | null) => {
  const meters = Number(mountain?.meters ?? 0);
  const feet = Number(mountain?.feet ?? 0);
  if (!mountain?.name) throw new Error("Name is required");
  if (!mountain?.location) throw new Error("Location is required");
  if (!meters || !(meters > 0)) throw new Error("Meters must be positive");
  if (!feet || !(feet > 0)) throw new Error("Feet must be positive");
  return {
    name: mountain?.name,
    location: mountain?.location,
    meters,
    feet,
  };
};

const verifyInsert = (mountain?: Mountain | null) => {
  return {
    mountain: verifyMountainInput(mountain),
  };
};

const verifyUpdate = (mountain?: Mountain | null) => {
  return {
    id: mountain?.id,
    mountainSet: verifyMountainInput(mountain),
  };
};

function FindMountainsTable() {
  const [sort] = useSort();
  const [pagination] = usePagination();
  const variables = React.useMemo(
    () => ({
      sort,
      pagination,
    }),
    [sort, pagination]
  );
  return (
    <CrudProvider<Mountain | null>
      typeName="Mountain"
      variables={variables}
      initialItem={initialMountain}
      findDocument={FindMountainsDocument}
      insertDocument={InsertMountainDocument}
      updateDocument={UpdateMountainDocument}
      removeManyDocument={RemoveManyMountainsDocument}
      verifyInsert={verifyInsert}
      verifyUpdate={verifyUpdate}
    >
      <CrudTable<Mountain | null>
        title="Mountains"
        head={MountainHead}
        form={MountainForm}
        renderRow={(mountain, i) => (
          <MountainRow key={mountain?.id ?? i} mountain={mountain} />
        )}
      />
    </CrudProvider>
  );
}

function MountainHead() {
  return (
    <CheckboxHeaderRow>
      <HeadSortCell field="name">
        <strong>Name</strong>
      </HeadSortCell>
      <HeadSortCell field="location">
        <strong>Location</strong>
      </HeadSortCell>
      <HeadSortCell field="meters" align="right">
        <strong>Meters</strong>
      </HeadSortCell>
      <HeadSortCell field="feet" align="right">
        <strong>Feet</strong>
      </HeadSortCell>
      <HeadSortCell field="update" />
    </CheckboxHeaderRow>
  );
}

function MountainRow({ mountain }: { mountain?: Mountain | null }) {
  return (
    <CheckboxRow
      labelId={`mountain-row-${mountain?.id}`}
      item={mountain}
      name="name"
    >
      <TableCell>{mountain?.location ?? ""}</TableCell>
      <TableCell align="right">{num(mountain?.meters ?? 0)}</TableCell>
      <TableCell align="right">{num(mountain?.feet ?? 0)}</TableCell>
      <TableCell align="right">
        <UpdateItemButton item={mountain} />
      </TableCell>
    </CheckboxRow>
  );
}

function MountainFormInsert() {
  const [validateError, setValidateError] = React.useState("");
  const {
    insertItem,
    setInsertItem,
    setInsertItemValue,
    onInsert,
    inserting,
  } = useInsertContext<Mountain>();
  const onConfirm = () => {
    if (onInsert && !inserting) {
      setValidateError("");
      onInsert(insertItem)
        .then(() => setInsertItem?.(null))
        .catch((e) => setValidateError(e.message));
    }
  };
  return (
    <Card>
      <CardHeader title="Insert Mountain" />
      <Divider />
      <CardContent>
        <MountainForm
          values={insertItem}
          onSubmit={onConfirm}
          setValue={setInsertItemValue}
        />
        <Typography color="error">{validateError}</Typography>
      </CardContent>
      <Divider />
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Box p={1} width="100%">
          <LoadingButton
            variant="contained"
            onClick={onConfirm}
            color="primary"
            fullWidth
          >
            Submit
          </LoadingButton>
        </Box>
      </CardActions>
    </Card>
  );
}

function MountainFormUpdate({ id }: { id: string }) {
  const [validateError, setValidateError] = React.useState("");
  const { data, loading } = useFindMountainByIdQuery({
    variables: {
      id,
    },
  });
  const mountain = data?.findMountainById;
  const {
    updateItem,
    setUpdateItem,
    setUpdateItemValue,
    onUpdate,
    updating,
  } = useUpdateContext<Mountain>();
  const onConfirm = () => {
    if (onUpdate && !updating) {
      setValidateError("");
      onUpdate(updateItem)
        // .then(() => setInsertItem?.(null))
        .catch((e) => setValidateError(e.message));
    }
  };
  React.useEffect(() => {
    setUpdateItem?.(mountain ?? null);
  }, [mountain]);
  return (
    <Card>
      <CardHeader title="Update Mountain" />
      {loading ? <LinearProgress /> : <Divider />}
      <CardContent>
        <MountainForm
          values={updateItem}
          onSubmit={onConfirm}
          setValue={setUpdateItemValue}
        />
        <Typography color="error">{validateError}</Typography>
      </CardContent>
      <Divider />
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Box p={1} width="100%">
          <LoadingButton
            variant="contained"
            onClick={onConfirm}
            color="primary"
            fullWidth
          >
            Submit
          </LoadingButton>
        </Box>
      </CardActions>
    </Card>
  );
}

function MountainDetails({ id }: { id: string }) {
  const { setConfirmRemove } = useRemoveContext();
  const { data, loading } = useFindMountainByIdQuery({
    variables: {
      id,
    },
  });
  const mountain = data?.findMountainById;
  return (
    <>
      <Card>
        <CardHeader title={<>{mountain?.name ?? ""}&nbsp;</>} />
        {loading ? <LinearProgress /> : <Divider />}
        <CardContent>
          <Typography>
            <strong>Location</strong>
          </Typography>
          <Typography>{mountain?.location ?? ""}&nbsp;</Typography>
          <Typography>
            <strong>Meters</strong>
          </Typography>
          <Typography>
            {mountain?.meters ? num(mountain?.meters ?? 0) : ""}&nbsp;
          </Typography>
          <Typography>
            <strong>Feet</strong>
          </Typography>
          <Typography>
            {mountain?.feet ? num(mountain?.meters ?? 0) : ""}&nbsp;
          </Typography>
        </CardContent>
        <Divider />
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Box p={1} width="100%">
            <LoadingButton
              variant="contained"
              onClick={() => setConfirmRemove?.(true)}
              color="primary"
              fullWidth
            >
              Delete
            </LoadingButton>
          </Box>
        </CardActions>
      </Card>
      <ConfirmRemoveDialog />
    </>
  );
}

function MountainForm({
  values,
  onSubmit,
  setValue,
}: {
  values?: Mountain | null;
  onSubmit: () => any;
  setValue?: SetFormValue<Mountain>;
}) {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        name="name"
        label="Name"
        margin="normal"
        variant="outlined"
        value={values?.name ?? ""}
        onChange={(ev) => setValue?.("name", ev.target.value)}
        fullWidth
      />
      <TextField
        name="location"
        label="Location"
        margin="normal"
        variant="outlined"
        value={values?.location ?? ""}
        onChange={(ev) => setValue?.("location", ev.target.value)}
        fullWidth
      />
      <TextField
        name="meters"
        label="Meters"
        type="number"
        margin="normal"
        variant="outlined"
        value={values?.meters ?? ""}
        onChange={(ev) => setValue?.("meters", ev.target.value)}
        fullWidth
      />
      <TextField
        name="feet"
        label="Feet"
        type="number"
        margin="normal"
        variant="outlined"
        value={values?.feet ?? ""}
        onChange={(ev) => setValue?.("feet", ev.target.value)}
        fullWidth
      />
      <input type="submit" hidden />
    </form>
  );
}

function num(n: number) {
  return n.toLocaleString(undefined, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
}
