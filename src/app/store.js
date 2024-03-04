import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import wishlistsReducer from '../features/wishlist/wishSlice'; 
import cartSliceReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
    wishlists: wishlistsReducer,
    cart: cartSliceReducer
  });
export const store = configureStore({
    reducer: rootReducer,
  });