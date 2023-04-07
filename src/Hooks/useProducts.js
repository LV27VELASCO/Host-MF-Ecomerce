import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    
    const getProducts=()=>{
        const url="https://e-commerce-api-v2.academlo.tech/api/v1/products";
        axios.get(url)
        .then((response)=>{
            if(response.status==200){
                setAllProducts(response.data)
            }
        })
        .catch((error)=>console.log(error))
    }
    
    useEffect(() => {
      getProducts()
    }, [])
    
    return {allProducts}
}

export default useProducts
