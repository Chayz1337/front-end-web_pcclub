import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logobb from '../../imgs/logo.png'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Box
        component="img"
        sx={{
          height: 80,
          width: 80,
          maxHeight: { xs: 80, md: 80 },
          maxWidth: { xs: 80, md: 80 },
        }}
        alt="The house from the offer."
        src={logobb}
      />        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            База компьютерного клуба - CyberRoom
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}