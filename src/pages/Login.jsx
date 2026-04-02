import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box } from "@mui/material";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    if (login(data.username, data.password)) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
  <Box p={4} boxShadow={3} borderRadius={3}>
    <h2 style={{ textAlign: "center" }}>AI Theft Detection</h2>

    <TextField fullWidth label="Username" margin="normal"
      onChange={(e) => setData({...data, username: e.target.value})} />

    <TextField fullWidth label="Password" type="password" margin="normal"
      onChange={(e) => setData({...data, password: e.target.value})} />

    <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
      Login
    </Button>
  </Box>
</Container>
  );
}