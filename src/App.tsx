import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './screens/Home';
import {AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from '@mui/material';


import navigationTitles from './const/navigation';
import Blog from './screens/Blog';
import Projects from './screens/Projects';

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }; 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        A. EM
      </Typography>
      <Divider />
      <List>
        {navigationTitles.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.link)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
      ))}
    </List>
  </Box>
);


  const container = window !== undefined ? () => window.document.body : undefined;

return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: '#fff', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Alexandre Em
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navigationTitles.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }} onClick={() => navigate(item.link)}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
);
}

export default App;

