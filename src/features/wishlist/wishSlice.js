import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistsItems:  [],
}

export const wishlistsSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            
            let alreadyAddeditem = state.wishlistsItems.findIndex((item) => item.id === action.payload.id);
            if(alreadyAddeditem >=0 ){
                alert('Already in WishList!!!')
            }else{
                const updatedWishlistsItems = [...state.wishlistsItems, action.payload];
            return {
                ...state,
                wishlistsItems: updatedWishlistsItems
            };
            }

            
        },
        

        //remove from wishlist

        removeWishlist: (state, action) => {
            
            const updatedWishlists = state.wishlistsItems.filter((item) => item.id !== action.payload.id )

            // console.log('Updated wishlists:', updatedWishlists);
            // state.wishlistsItems = updatedWishlists;
            return {
                ...state,
                wishlistsItems:updatedWishlists
            }
        //   console.log('product removed' , action.payload);

        },

    },
})

export const { addToWishList, removeWishlist } = wishlistsSlice.actions

export default wishlistsSlice.reducer