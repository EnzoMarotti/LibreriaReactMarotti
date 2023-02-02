import ItemCount from "../contador/ItemCount"
import './itemDetail.css'
import { useState } from "react"
// import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

// import Item from "../item/item"


const ItemDetail = ({products}) => {
  //Go to cart que se va a activar al presional el botón.
  const [goToCart, setGoToCart] = useState (false);
  // const {addProduct} = useCartContext


const onAdd = (Contador) => {
  setGoToCart (true);
};

  return (
    <div className='ItemDetail'>
      <div className="Row-1">
    <div className="title">{products.name}</div>
    <img className="img" src={products.img} alt="Producto"/>
      </div>
      <div className="Row-2">
        <div>
    <div className="description">{products.descripcion}</div>
        </div>
        <div>
    <div className="price">Precio: {products.precio} AR$</div>
    <div className="stock">Stock: {products.stock}</div>

            {
            goToCart 
            ? <Link to="/cart">Terminar Compra</Link>
            :     <ItemCount onAdd= {onAdd}/>
            }
        </div>
      </div>
</div>
  )
}

export default ItemDetail


//Cambie el import de contador por ItemCount.