import ItemCount from "../contador/ItemCount"
import Card from 'react-bootstrap/Card'
import './itemDetail.css'




const ItemDetail = ({products}) => {
  return (
    <div className='ItemDetail'>
    <div className="title">{products.name}</div>
    <div className="description">{products.description}</div>
    <div className="price">Precio: {products.precio} AR$</div>
    <div className="stock">Stock: {products.stock}</div>
    <ItemCount/>
</div>
  )
}

export default ItemDetail


//Cambie el import de contador por ItemCount.