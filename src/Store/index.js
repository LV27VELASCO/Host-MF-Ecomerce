import {configureStore} from '@reduxjs/toolkit'
import Products from './Slices/products.slice';
import Cart from './Slices/cart.slice';

export default configureStore({
    reducer:{
        Products,
        Cart
    }
})