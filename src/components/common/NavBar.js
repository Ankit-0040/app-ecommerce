import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

function NavBar(props) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  };

  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Toolbar>
        <LocalLibraryIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>{props.title}</NavLink>
        </Typography>
        <Typography variant="h6" component="div" sx={{ mr: 4 }}>
          Hey!! {user && user.username}
        </Typography>
        <Button color="inherit" component={Link} to="/wishlist">
          Wishlist<FavoriteIcon />
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart<ShoppingCartIcon />
        </Button>
        <Button color="inherit" component={Link} to="/about">
          {props.aboutText}
        </Button>
        {user && user.username ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

export default NavBar;
