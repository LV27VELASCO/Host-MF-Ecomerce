import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const mySlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        setCart:(state,action)=>action.payload
    }
})

export const {setCart} = mySlice.actions;

export const getCart=()=>(dispach)=>{
    const url="https://e-commerce-api-v2.academlo.tech/api/v1/cart";
        axios.defaults.baseURL="https://e-commerce-api-v2.academlo.tech";
        axios.get(url,getConfig())
        .then((response)=>{
            if(response.status==200){
                dispach(setCart(response.data))
            }
        })
        .catch(err=>{
            if(err.response.status==403 ||err.response.status==404){
                dispach(setCart([]))
            }
        })
}

export default mySlice.reducer;