import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/itemCart";
import BuyingForm from "../buyingForm/BuyingForm";
import './Cart.css'

const Cart = () => {
    const {cart, totalPrice } = useCartContext ();

   if (cart.length  === 0) {
    return(
        <div className="CarritoVacio">
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Elije los productos que desees comprar</Link>
        </div>
    )} else{ 
        return(
            <div className="CartForm">
                <div className="CartForm_carrito">
                    <h1>Carrito de compras</h1>
       {cart.map(product => <ItemCart key={product.id} product= {product} />)}
       <p className="CartForm_carrito_p">Total: ${totalPrice ()} </p>
                </div>
   

        <div className="Formulario">
            <BuyingForm ></BuyingForm>
        </div>
    </div>
      )}
}



export default Cart