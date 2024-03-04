import React from 'react'
import { useSelector } from 'react-redux'
import WishListCard from '../Products/WishListCard'

function WhishList() {
  const { wishlistsItems } = useSelector((state) => state?.wishlists)
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h4 >WishListed Items </h4>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {wishlistsItems.map((wishlist, index) => (
        <WishListCard key={index} wishlist={wishlist} />
      ))}
</div>

    </div>
  )
}

export default WhishList
