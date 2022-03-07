import { useState, useEffect } from "react"
import axios from "axios"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import Header from "./components/Header"

import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { Todo } from "./types"
import AddTodoModal from "./components/modals/AddTodoModal"

function App() {
  const [todos, setTodos] = useState<Todo[] | null>([])
  const [modalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const init = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      )
      setTodos(result.data)
    }
    init()
  }, [])

  const columns: GridColDef[] = [
    {
      field: "completed",
      headerName: "Completed",
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      type: "boolean",
      renderCell: (data) => {
        return <Checkbox defaultChecked={data.value} />
      },
    },
    {
      field: "title",
      headerName: "Description",
      flex: 1,
      minWidth: 500,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      align: "center",
      type: "boolean",
      renderCell: () => {
        return (
          <div>
            <IconButton aria-label="delete">
              <EditIcon color="primary" />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        )
      },
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ paddingTop: 20, flex: 1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" component="div">
            Todo List
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setIsModalOpen(true)
            }}
            sx={{ height: "fit-content" }}
          >
            Add Todo
          </Button>
        </Stack>

        <Box sx={{ height: "calc(100% - 78px)", width: "100%", marginTop: 2 }}>
          <DataGrid
            rows={todos || []}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[]}
          />
        </Box>

        <AddTodoModal
          open={modalOpen}
          onClose={() => {
            setIsModalOpen(false)
          }}
        />
      </Container>
    </>
  )
}

export default App
