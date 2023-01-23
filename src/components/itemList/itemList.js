import './itemList.css'

import Item from '../item/item'

const ItemList = ({producto}) => {
  return (

    //Mapeo de los productos que vienen de "productos.js"
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



//La Key es el identificador que necesita React para saber que Item esta generando. Para ese usamos el ID del producto.

//Dentro del "li" metemos cada <item/> que se crea, asignandole  la propiedad (producto) que va a contener dentro el parámetro producto (elementos mapeados.)

//A la hora de llamar dentro de "item.js" las propiedades del array. Debemos llamar a la  propiedad. ej:  producto.title