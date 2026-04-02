import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ title, value, color }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.05)" }
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" color="gray">
          {title}
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ color }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}