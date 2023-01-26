  import getProducts from '../productos/productos';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  //Use state para guardar la data que va a ser mandado a "itemlist"  
  const[products, setProducts]= useState([])

    const {categoria} = useParams();
    useEffect(() => {
      if(categoria) {
          getProducts.then(res => setProducts(res.filter(producto => producto.categoria === categoria)))
      } else {
          getProducts.then(res => setProducts(res))
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