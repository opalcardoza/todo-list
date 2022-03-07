import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Container } from "@mui/material"

function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
