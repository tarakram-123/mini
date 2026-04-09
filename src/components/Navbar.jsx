import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(10px)",
        background: "rgba(2,6,23,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1, fontWeight: "bold" }}>
          🔐 AI Theft Detection
        </Typography>

        <Button
          onClick={logout}
          sx={{
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "8px"
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}