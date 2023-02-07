import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  //Use state para guardar la data que va a ser mandado a "itemlist"  
  const[products, setProducts]= useState([])

    const {categoria} = useParams();
    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection (querydb, 'productos');
      if(categoria) {
        const queryFilter = query(queryCollection, where('categoria', '==', categoria))
        getDocs(queryFilter) 
        .then(res => setProducts(res.docs.map(producto => ({id:producto.id , ...producto.data() }))))
      } else {
        getDocs(queryCollection) 
        .then(res => setProducts(res.docs.map(producto => ({id:producto.id , ...producto.data() }))))
      }
  }, [categoria])

  return (
    <div>
         <ItemList  producto={products}/>
    </div>
  )
}

export default ItemListContainer

//dentro del return se manda la data que sale del State [] al "ItemList.js"