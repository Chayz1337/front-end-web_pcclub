import ListItem from "@mui/material/ListItem";
import { Link } from "../../../node_modules/react-router-dom/dist/index"
import s from './s.module.scss'
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

export const SideBar=()=> {
    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
              <Link to={'admins'}> 
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Admins" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'visitors'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Visitors" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'computers'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Computers" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'halls'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Halls" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'services'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Services" />
                      </ListItemButton>
                  </ListItem>
              </Link>
              <Link to={'visits'}>
                  <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemText primary="Visits" />
                      </ListItemButton>
                  </ListItem>
              </Link>
          </List>
        </nav>
      </Box>
    );
  }