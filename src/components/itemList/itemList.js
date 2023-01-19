import './itemList.css'

import Item from '../item/item'

const ItemList = ({producto}) => {
  return (
    <ul className="Items" >
    {producto.map(producto => (
            <li key={producto.id}>
                <Item producto={producto}/>
            </li>
    ))}
    </ul> 
  )
}

export default ItemList