import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <AppBar position="static" sx={{ bgcolor: "#1e293b" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          AI Theft Detection
        </Typography>

        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}