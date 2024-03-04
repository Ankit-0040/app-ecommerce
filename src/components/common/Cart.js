import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../Products/CartCard'

function Cart() {
    const { cartItems } = useSelector((state) => state.cart)
  
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h4>Cart Items</h4>
            </div>
            {/* <ul>
                {cartItems.map((cart, index) => (
                    <li key={index}>{cart.title}</li> 
                ))}
            </ul> */}
            {cartItems.map((cart, index) => (
        <CartCard key={index} cart={cart} />
      ))}
        </div>
    )
}

export default Cart
