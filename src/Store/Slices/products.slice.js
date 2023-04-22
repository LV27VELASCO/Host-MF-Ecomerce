import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const mySlice=createSlice({
    name:'Products',
    initialState:null,
    reducers:{
        setProducts:(state,action)=>action.payload
    }
})

export const {setProducts} = mySlice.actions;

export const getProducts=()=>(dispach)=>{
    const url="https://e-commerce-api-v2.academlo.tech/api/v1/products";
        axios.defaults.baseURL="https://e-commerce-api-v2.academlo.tech";
        axios.get(url)
        .then((response)=>{
            if(response.status==200){
                dispach(setProducts(response.data))
            }
        })
        .catch((error)=>console.log(error))
}

export default mySlice.reducer;