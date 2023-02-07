import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../context/CartContext';


const Cart = () => {
const {totalProducts} = useCartContext ();

  return (
    <div>
        <FontAwesomeIcon className="Cart" icon={faCartShopping}/> 
        
        <span> {totalProducts () || ''} </span>
    </div>
  )
}

export default Cart;