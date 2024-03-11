import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../Products/CartCard';
import ClearModal from '../Products/ClearModal';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

function Cart() {
    const { cartItems } = useSelector((state) => state.cart)
    // const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const total = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    return (
        <>
            <div className="cart-heading">
                <h4>Cart Items</h4>
            </div>
            <div className="cart-container">

                <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            Home
                        </Link>
                        <Typography color="text.primary">Cart</Typography>
                    </Breadcrumbs>
                </div>

                {cartItems.map((cart, index) => (
                    <CartCard key={index} cart={cart} />
                ))}
                <hr />
                <div className="cart-total">
                    <h4>
                        Total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <div className='clear-cart'>
                    <ClearModal />
                </div>
            </div>
        </>
    )
}

export default Cart;