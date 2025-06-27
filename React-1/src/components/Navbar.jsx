import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Typography variant="h6" component="div">
          Best Deal
        </Typography>

        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button variant="outlined" startIcon={<HomeIcon />} sx={{ color: 'white' }}>
              Home
            </Button>
          </Link>

          <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
            <Button
            variant="outlined"
              startIcon={<ShoppingCartIcon />}
              sx={{ color: 'white' }}
            >Cart {cart.length}

               
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
