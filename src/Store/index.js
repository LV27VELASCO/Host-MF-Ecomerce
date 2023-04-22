import {configureStore} from '@reduxjs/toolkit'
import Products from './Slices/products.slice'

export default configureStore({
    reducer:{
        Products
    }
})