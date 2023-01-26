import './NavBar.css'
import Cart from './CartWidget'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

 const NavBar = () => {
  return (
    <>
    <header className="header">
        <NavLink className='logo'  to="/" >Trago Amargo</NavLink>
        

        <nav className='navbar'>
            <NavLink to="/">Home</NavLink>
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