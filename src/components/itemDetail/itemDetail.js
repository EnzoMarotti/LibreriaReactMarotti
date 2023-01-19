import ItemCount from "../contador/ItemCount"
import Card from 'react-bootstrap/Card'
import './itemDetail.css'


const ItemDetail = ({products}) => {
  return (
    <div className='ItemRow'>
        <Card  className="Item">
          <Card.Body>
            <Card.Title><span>{products.name}</span> </Card.Title>
              <Card.Text>
                  <p>Precio: {products.precio} AR$</p>
                  <p>Stock: {products.stock}</p>
              </Card.Text>
            <ItemCount/>
          </Card.Body>
        </Card>
            </div>
  )
}

export default ItemDetail


//Cambie el import de contador por ItemCount.