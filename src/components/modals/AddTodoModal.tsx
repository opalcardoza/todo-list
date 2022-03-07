import { Box, Button, Input, Modal, Typography } from "@mui/material"

interface AddTodoModalProps {
  open: boolean
  onClose: () => void
}

const AddTodoModal = ({ open, onClose }: AddTodoModalProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Todo
          <div style={{ marginBottom: 20, marginTop: 10 }}>
            <Input fullWidth placeholder="Enter todo description" />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained">Add Todo</Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default AddTodoModal
