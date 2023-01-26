import getProducts from "../productos/productos"
import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
    const[products, setProducts]= useState({})
    const {id} = useParams()
   

    useEffect(() =>{
        getProducts 
        .then((resp)=> setProducts(resp.find(item => item.id === parseInt(id))))
        .catch((err) => console.log(err))
    }, [id])
    
    return (
        <ItemDetail products={products}></ItemDetail>
    );
}
export default ItemDetailContainer;