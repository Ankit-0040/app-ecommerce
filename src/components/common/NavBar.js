import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

function NavBar(props) {
  const {user, setUser} = useContext(UserContext)
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <LocalLibraryIcon fontSize="large" />
        <NavLink className="navbar-brand" to="/">{props.title}</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          {/* <TextField
          id="standard-search"
          label="Search Product"
          type="search"
          variant="standard"
          sx={{ width: '400px' }} 
        /> */}
         <h3> Hey!! {user && user.username} </h3>
        </div>
        <ul className="navbar-nav ml-auto">
          <div>
            <li className="nav-item">
              <Link className="nav-link" to="/WishList">WishList {" "}
                <FavoriteIcon  htmlColor="red" /> </Link>
            </li>
          </div>

          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
  
          <li className="nav-item">
            <Link className="nav-link" to="/Cart">Cart {" "} <ShoppingCartIcon /></Link>
          </li>
          <li className="nav-item">
            {user && user.username ? (
              <button className="btn btn-link nav-link" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
          
      </div>
    </nav>
  )
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

export default NavBar;
