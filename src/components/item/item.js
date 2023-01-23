import {Link} from "react-router-dom"
import Contador from "../contador/ItemCount"
import './item.css'



const Item = ({producto}) => {
  return (

   


    <div className='Item'>
      <div className="Card">
          <div className="CardBody">
              <h2 className="Card.title">{producto.name} </h2>
           <div className="Card_content">
              <img src={producto.img} alt="Producto"/>
              <p className="Card_p">Precio: {producto.precio} AR$ Stock: {producto.stock}</p>
              <Link to={`/item/${producto.id}`} >
              <button className="Button">Ver Más</button>
               </Link>
                      <Contador producto={producto} />
             </div >
           </div>
        </div>
    </div>
  )
}

export default Item