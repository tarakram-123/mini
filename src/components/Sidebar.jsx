import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        [`& .MuiDrawer-paper`]: {
          width: 220,
          background: "#020617",
          color: "white"
        }
      }}
    >
      <List>
        <ListItem
          button
          sx={{
            "&:hover": {
              background: "#1e293b",
              borderLeft: "4px solid #22c55e"
            }
          }}
        >
          <ListItemText primary="📊 Dashboard" />
        </ListItem>

        <ListItem
          button
          sx={{
            "&:hover": {
              background: "#1e293b",
              borderLeft: "4px solid #ef4444"
            }
          }}
        >
          <ListItemText primary="🚨 Alerts" />
        </ListItem>
      </List>
    </Drawer>
  );
}