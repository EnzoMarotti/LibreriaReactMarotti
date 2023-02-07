import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/itemCart";
import BuyingForm from "../buyingForm/BuyingForm";
import './Cart.css'

const Cart = () => {
    const {cart, totalPrice } = useCartContext ();

   if (cart.length  === 0) {
    return(
        <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Elije los productos que desees comprar</Link>
        </>
    )} else{ 
        return(
            <div>
       {cart.map(product => <ItemCart key={product.id} product= {product} />)}
   
        <p>Total: {totalPrice ()} </p>
        <div className="Formulario">
        <BuyingForm ></BuyingForm>
        </div>
    </div>
      )}
}



export default Cart