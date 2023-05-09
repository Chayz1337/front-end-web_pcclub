import ListItem from "@mui/material/ListItem";
import { Link } from "../../../node_modules/react-router-dom/dist/index"
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

export const SideBar=()=> {
    return (
      <Box sx={{ width: '100%', maxWidth: 340, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
              <Link to={'admins'}> 
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Администраторы" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'visitors'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Посетители" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'computers'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Компьютеры" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'halls'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Залы" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'services'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Услуги" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'visits'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Посещения" />
                      </ListItemButton>
                  </ListItem>
              </Link>
          </List>
        </nav>
      </Box>
    );
  }