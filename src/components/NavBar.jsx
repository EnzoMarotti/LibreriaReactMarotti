import './NavBar.css'
import Cart from './CartWidget'
import { Nav } from 'react-bootstrap';

 const NavBar = () => {
  return (
    <>
    <header className="header">
        <p className='logo'>Trago Amargo</p>
        

        <nav className='navbar'>
            <a href="/">Home</a>
            <a href="#SobreNosotros">Sobre nosotros</a>
           <Nav.Link href="/categoria/Cervezas">  Cervezas </Nav.Link>
           <Nav.Link href="/categoria/Gin">  Gin </Nav.Link>
            <a href="#contactanos">Contáctanos</a> 
        </nav>

        <a href="Carrito"><Cart valor='0'></Cart>Carrito</a>
    </header>
    </>
  )
}

export default NavBar;