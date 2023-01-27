import ItemCount from "../contador/ItemCount"
import './itemDetail.css'




const ItemDetail = ({products}) => {
  return (
    <div className='ItemDetail'>
      <div className="Row-1">
    <div className="title">{products.name}</div>
    <img className="img" src={products.img} alt="Producto"/>
      </div>
      <div className="Row-2">
        <div>
    <div className="description">{products.descripcion}</div>
        </div>
        <div>
    <div className="price">Precio: {products.precio} AR$</div>
    <div className="stock">Stock: {products.stock}</div>
    <ItemCount/>
        </div>
      </div>
</div>
  )
}

export default ItemDetail


//Cambie el import de contador por ItemCount.