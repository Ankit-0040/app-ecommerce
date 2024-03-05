import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../Products/CartCard'
import ClearModal from '../Products/ClearModal';

function Cart() {
    const { cartItems } = useSelector((state) => state.cart)
    // const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const total = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h4>Cart Items</h4>
            </div>
            {cartItems.map((cart, index) => (
                <CartCard key={index} cart={cart} />
            ))}
            <hr />
            <div className="cart-total" style={{ textAlign: 'end' }}>
                <h4>
                    Total <span>${total.toFixed(2)}</span>
                </h4>
            </div>

            <div className='clearCart' style={{ textAlign: 'center', marginTop: '20px' }}>
                <ClearModal/>
            </div>

        </div>
    )
}

export default Cart
