import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography
} from "@mui/material";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleLogin = () => {
    if (login(data.username, data.password)) {
      navigate("/dashboard");   // ✅ redirect
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Box
        sx={{
          p: 5,
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          background: "rgba(30,41,59,0.8)",
          boxShadow: "0 0 30px rgba(0,0,0,0.5)",
          color: "white"
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          🔐 AI Theft Detection
        </Typography>

        {/* USERNAME */}
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#ccc" } }}
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#ccc" } }}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        {/* LOGIN BUTTON */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            background: "#22c55e",
            borderRadius: "10px",
            fontWeight: "bold",
            "&:hover": {
              background: "#16a34a"
            }
          }}
          onClick={handleLogin}   // 🔥 IMPORTANT
        >
          Login
        </Button>

        {/* DEMO INFO */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "#aaa" }}
        >
          Demo: admin / 1234
        </Typography>
      </Box>
    </Container>
  );
}