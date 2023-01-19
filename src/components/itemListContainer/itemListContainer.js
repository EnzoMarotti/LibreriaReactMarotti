import getProducts from '../productos/productos';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const[products, setProducts]= useState([])

    const {categoria} = useParams();
    useEffect(() => {
      if(categoria) {
          getProducts.then(res => setProducts(res.filter(producto => producto.categoria === categoria)))
      } else {
          getProducts.then(res => setProducts(res))
      }
  })

  return (
    <div>
         <ItemList  producto={products}/>
    </div>
  )
}

export default ItemListContainer