import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import NorthStar from '../assets/img/NorthStar_5.jpeg';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
    {
        name: "HOME",
        path: "/",
    },
    {
        name: "BLOG",
        path: "/blog",
    },
    {
        name: "TEST",
        path: "/test"
    },
    {
      name: "GAMES",
      path: "/games"
    },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex', marginTop: "50px" }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" sx={{ minHeight: '100px', top: 0, background: "rgb(36, 39, 52)" }}>
        <Toolbar sx={{ minHeight: '100px', display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <img src={NorthStar} alt="Logo" style={{ height: "100px", objectFit: "contain", marginTop: "10px" }} />
          </Typography>
          
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ fontSize: '2rem' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item.name}
                sx={{ 
                    color: location.pathname === `${item.path}` ? 'black' : 'white',
                    backgroundColor: location.pathname === `${item.path}` ? 'white' : 'transperent',
                    fontSize: '1.5rem',
                    padding: '10px 25px',
                    margin: '0 10px',
                    textTransform: 'none', 
                    fontFamily: 'Roboto, sans-serif',
                    letterSpacing: '2px',
                    // backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: location.pathname === `${item.path}` ? 'white' : 'rgba(231, 231, 231, 0.1)',
                    }
                }}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
      >
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.name} onClick={() => {
              navigate(item.path);
              handleDrawerToggle();
            }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', letterSpacing: '2px', padding: '10px 0' }}>{item.name}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Header;
