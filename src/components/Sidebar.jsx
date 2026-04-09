import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        [`& .MuiDrawer-paper`]: {
          width: 220,
          background: "rgba(2,6,23,0.9)",
          color: "#fff",
          borderRight: "1px solid rgba(255,255,255,0.1)"
        }
      }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="📊 Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="🚨 Alerts" />
        </ListItem>
      </List>
    </Drawer>
  );
}