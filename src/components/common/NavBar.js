import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function NavBar(props) {
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
        </div>
        <ul className="navbar-nav ml-auto"> {/* Use ml-auto class to move items to the right */}
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
