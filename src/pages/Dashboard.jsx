import { Box, Grid, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <Box display="flex" bgcolor="#f4f6f8" minHeight="100vh">
        <Sidebar />

        <Box flex={1} p={3}>

          {/* TITLE */}
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Surveillance Dashboard
          </Typography>

          {/* STATS */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <StatCard title="Persons Detected" value="12" color="#1976d2" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard title="Weapons Detected" value="2" color="#d32f2f" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard title="Alerts" value="5" color="#ed6c02" />
            </Grid>
          </Grid>

          {/* CAMERA SECTION */}
          <Paper elevation={4} sx={{ mt: 4, p: 2, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>
              Live Camera Feed
            </Typography>

            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                border: "2px solid #ddd",
              }}
            >
              <img
                src="http://127.0.0.1:5000/video_feed"
                width="100%"
              />
            </Box>
          </Paper>

          {/* ALERTS */}
          <Paper elevation={4} sx={{ mt: 4, p: 2, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>
              Recent Alerts
            </Typography>

            <ul>
              <li>🔫 Weapon Detected</li>
              <li>⚠ High Threat</li>
              <li>😷 No Mask</li>
            </ul>
          </Paper>

        </Box>
      </Box>
    </>
  );
}