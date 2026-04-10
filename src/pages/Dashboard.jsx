import { Box, Grid, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Dashboard() {

  const [stats, setStats] = useState({
    persons: 0,
    weapons: 0,
    alerts: 0
  });

  // ✅ Fetch stats safely
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/stats");
        setStats(res.data);
      } catch (err) {
        console.log("Backend not running");
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Alert popup (safe)
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/alert");
        if (res.data.alert) {
          toast.error(res.data.alert);
        }
      } catch {}
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <Box
        display="flex"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a, #020617)"
        }}
      >
        <Sidebar />

        <Box flex={1} p={3} color="white">

          {/* HEADER */}
          <Typography variant="h4" fontWeight="bold" mb={2}>
            📡 CCTV Surveillance Dashboard
          </Typography>

          {/* STATUS BAR */}
          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 2,
              background: "rgba(30,41,59,0.8)",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>🟢 System Active</span>
            <span>📷 Cameras Connected</span>
          </Box>

          {/* STATS */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <StatCard title="Persons" value={stats.persons} color="#22c55e" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard title="Weapons" value={stats.weapons} color="#ef4444" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard title="Alerts" value={stats.alerts} color="#f59e0b" />
            </Grid>
          </Grid>

          {/* CAMERA GRID */}
          <Grid container spacing={3} mt={2}>
            {[1, 2, 3, 4].map((cam) => (
              <Grid item xs={12} md={6} key={cam}>
                <Paper
                  sx={{
                    p: 1,
                    background: "#1e293b",
                    borderRadius: 3
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "2px solid #22c55e",
                      boxShadow: "0 0 15px rgba(34,197,94,0.5)"
                    }}
                  >
                    <img
                      src="http://127.0.0.1:5000/video_feed"
                      width="100%"
                      alt="camera"
                    />

                    {/* LIVE TAG */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "red",
                        color: "white",
                        px: 1,
                        borderRadius: 1,
                        fontSize: "12px"
                      }}
                    >
                      ● LIVE
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </>
  );
}