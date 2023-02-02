import './contador.css'
import { useState } from "react";


const ItemCount = ({onAdd}) => {

  // Mensaje que nos indica cuantas unidades se compraron en el botón de Agregar al carrito.

  //UseState para poder modificar el contador.  
  const [contador,setContador] = useState (0);

  //Stock hardcodeado
  const StockTotal = 10;

    //Para sumar:
  const Sumar = () => {
      if( contador < StockTotal)
      setContador( contador +1);
  }

  //Para restar
  const Restar = () => {
    if (contador > 0 )
    setContador( contador -1);
}
  
    return (
    <div>
      <div className='Contador-total'>
        <div className='contador_div'>
                <button className='boton' onClick={Restar}>-</button>
                <span>{'  ' +contador+'  '}</span>
                <button className='boton' onClick={Sumar}>+</button>
            </div>
                <button className='carrito' onClick={() => onAdd (contador)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;