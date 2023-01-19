import { useState } from "react";

const ItemCount = () => {
  //UseState para poder modificar el contador.  
  const [contador,setContador] = useState (0);

  //Para sumar:
  const StockTotal = 10;

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
        <div>
                <button onClick={Restar}>-</button>
                <span>{'  ' +contador+'  '}</span>
                <button onClick={Sumar}>+</button>
            </div>
                <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;