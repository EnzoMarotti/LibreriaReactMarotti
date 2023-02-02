import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import CartProvider from './context/CartContext';
import Cart from './components/CartWidget';
import NavBar from './components/NavBar'


function App() {
  return (
    <BrowserRouter>
     <CartProvider> 
      <NavBar></NavBar>
      <Routes>
        <Route path="*" element ={<div>Ocurrio un error</div>} />  
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
        <Route path="/Item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
     </CartProvider> 
    </BrowserRouter>
  );
}

export default App;

