import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ title, value, color }) {
  return (
    <Card sx={{
      background: "#1e293b",
      color: "white",
      borderRadius: 3,
      "&:hover": { transform: "scale(1.05)" }
    }}>
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h4" sx={{ color }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}