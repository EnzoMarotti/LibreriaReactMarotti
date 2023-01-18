
const Item = ({productItem}) => {
  return (
    <div>
        <h2>{productItem.id}</h2>
        <h2>{productItem.name}</h2>
        <h2>{productItem.price}</h2>
    </div>
  )
}

export default Item