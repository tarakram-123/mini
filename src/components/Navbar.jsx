import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#020617",
        borderBottom: "1px solid #1e293b"
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          🔐 AI Theft Detection
        </Typography>

<Button
  variant="contained"
  sx={{
    background: "#ef4444",
    borderRadius: "10px",
    px: 3,
    "&:hover": { background: "#dc2626" }
  }}
  onClick={logout}
>
  Logout
</Button>
      </Toolbar>
    </AppBar>
  );
}