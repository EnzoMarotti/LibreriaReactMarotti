import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
    <div>
        <h1 className='ItemList'>{props.greeting}</h1>
    </div>
    );
    }
    
    export default ItemListContainer;