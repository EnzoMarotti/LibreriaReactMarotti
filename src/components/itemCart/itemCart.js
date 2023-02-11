import { useCartContext } from "../../context/CartContext"
import './style.css'

const ItemCart = ({ product }) => {

const {removeProduct} = useCartContext()

  return (
    <div className="itemcart">
      <img src={product.img} alt={product.name}></img>
        <div className="itemcart_div">
              <p>Titulo: {product.nombre}</p>
              <p>Cantidad {product.Contador}</p>
              <p>Precio: {product.precio} </p>
              <p>Subtotal: ${product.Contador * product.precio} </p>
              <button onClick={() => removeProduct (product.id) }>Eliminar</button>
        </div>
    </div>
  )
  }

export default ItemCart