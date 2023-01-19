import {Link} from "react-router-dom"
import Contador from "../contador/ItemCount"
import './item.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({producto}) => {
  return (
    <div className='ItemRow'>
    <Card style={{ width: '25rem' }} className="Item">
<Card.Body>
    <Card.Title>{producto.name} </Card.Title>
    <Card.Text>
        <img src={producto.img} alt="Producto"/>
        <p>Precio: {producto.precio} AR$ Stock: {producto.stock}</p>
        <Link to={`/item/${producto.id}`} >
            <Button variant="primary">Ver Más</Button>
        </Link>
    </Card.Text>
    <Contador producto={producto}/>
</Card.Body>
</Card>
    </div>
  )
}

export default Item