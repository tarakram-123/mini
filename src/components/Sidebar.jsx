import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        [`& .MuiDrawer-paper`]: {
          width: 220,
          background: "#1e293b",
          color: "white"
        }
      }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Alerts" />
        </ListItem>
      </List>
    </Drawer>
  );
}