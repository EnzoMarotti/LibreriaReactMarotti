import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
    const[products, setProducts]= useState({})
    const {id} = useParams()
   

    useEffect(() =>{
        const querydb = getFirestore ();
        const queryDoc = doc(querydb, 'productos', id);
        getDoc(queryDoc)
        .then (res => setProducts(({ id:res.id , ...res.data() })))
    }, [id])
    
    return (
        <ItemDetail products={products}></ItemDetail>
    );
}
export default ItemDetailContainer;




