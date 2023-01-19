import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'


import NavBar from './components/NavBar'


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="*" element ={<div>Ocurrio un error</div>} />  
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
        <Route path="/Item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

      /* <ItemListContainer greeting="Bienvenido a TragoAmargo" /> */




      //Hacer pagina "Route" de error. e importarlo al Route.