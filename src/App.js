import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import './App.css';
import NavBar from './components/NavBar'
// import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="*" element ={<div>Ocurrio un error</div>} />  
     <Route path="/" element={<Home/>}  />
     <Route path="detail" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

      /* <ItemListContainer greeting="Bienvenido a TragoAmargo" /> */




      //Hacer pagina "Route" de error. e importarlo al Route.