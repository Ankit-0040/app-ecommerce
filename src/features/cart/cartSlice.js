import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:  [],
    total: 0,
    quantity: 1
}

export const cartSlice = createSlice({
    name: 'cartinfo',
    initialState,
    reducers: {
        //Add item to Cart
        addToCart : (state, action) => {
            let alreadyAddeditem = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(alreadyAddeditem >=0 ){
                alert('Already in Cart!!!')
            }else{
                const updatedCartItems = [...state.cartItems, {...action.payload, quantity: 1}];
            return {
                ...state,
                cartItems: updatedCartItems
            };
            }
           // console.log('item added', action.payload);
        },
        
        //Remove from Cart
        removeFromCart : (state, action) => {
            // console.log("product removed", action.payload);
            const updatedCart = state.cartItems.filter((item) => item.id !== action.payload.id )

            return {
                ...state,
                cartItems:updatedCart
            }
        },

        //Increase product quantity and handle the price accordingly
        increaseQuantity: (state, action) => {
            const newCartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    const updatedQuantity = (item.quantity || 1) + 1;
                    const updatedTotal = item.price * updatedQuantity; 
        
                    return {
                        ...item,
                        quantity: updatedQuantity,
                        total: updatedTotal 
                    };
                }
                return item;
            });
        
            return { ...state, cartItems: newCartItems };
        },

        //decrease product quantity and handle the price accordingly
        decreaseQuantity: (state, action) => {
            const newCartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    const updatedQuantity = Math.max((item.quantity || 1) - 1, 1); 
                    const updatedTotal = item.price * updatedQuantity; 
        
                    return {
                        ...item,
                        quantity: updatedQuantity,
                        total: updatedTotal 
                    };
                }
                return item;
            });
        
            return { ...state, cartItems: newCartItems };
        },

        //Clear Cart items
        clearCart : (state) => {
            const updatedCart = [];
            return {
                ...state,
                cartItems:updatedCart
            }
        }
        
    },
})
export const { addToCart, removeFromCart, increaseQuantity,  decreaseQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer