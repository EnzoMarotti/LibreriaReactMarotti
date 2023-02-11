import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar'
import Footer from './components/footer/footer';


function App() {
  return (
    <BrowserRouter>
     <CartProvider> 
      <NavBar></NavBar>
      <Routes>
        <Route path="*" element ={<h1>Ocurrio un error</h1>} />  
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
        <Route path="/Item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer></Footer>
     </CartProvider> 
    </BrowserRouter>
  );
}

export default App;

