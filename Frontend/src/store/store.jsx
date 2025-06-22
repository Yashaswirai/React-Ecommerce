import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/CartReducer';
import productReducer from './reducers/ProductReducer';
import userReducer from './reducers/UserReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer,
  },
})
