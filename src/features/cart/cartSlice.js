import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:  [],
}

export const cartSlice = createSlice({
    name: 'cartinfo',
    initialState,
    reducers: {
        addToCart : (state, action) => {
            let alreadyAddeditem = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(alreadyAddeditem >=0 ){
                alert('Already in Cart!!!')
            }else{
                const updatedCartItems = [...state.cartItems, action.payload];
            return {
                ...state,
                cartItems: updatedCartItems
            };
            }
            console.log('item added', action.payload);
        },
        removeFromCart : (state, action) => {
            // console.log("product removed", action.payload);
            const updatedCart = state.cartItems.filter((item) => item.id !== action.payload.id )

            return {
                ...state,
                cartItems:updatedCart
            }
        },
        clearCart : (state, action) => {
            const clearCart = state.cartItems
        }
    },
})
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer