import React from 'react'
import { useSelector } from 'react-redux'
import WishListCard from '../Products/WishListCard'
import '../css/WishList.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function WhishList() {
  const { wishlistsItems } = useSelector((state) => state?.wishlists)
  return (
    <>
      <div className="wishlist-heading">
        <h4 >WishListed Items </h4>
      </div>
      <div className="wishlist-container">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              Home
            </Link>
            <Typography color="text.primary">WishList</Typography>
          </Breadcrumbs>
        </div>
        <div className="wishlist-items">
          {wishlistsItems.map((wishlist, index) => (
            <WishListCard key={index} wishlist={wishlist} />
          ))}
        </div>

      </div>
    </>
  )
}

export default WhishList
