import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


const Cart = ({valor}) => {
  return (
    <div>
        <FontAwesomeIcon className="Cart" icon={faCartShopping}/> <span> {valor}</span>
    </div>
  )
}

export default Cart;