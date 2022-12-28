import './NavBar.css'
import Cart from './CartWidget'

 const NavBar = () => {
  return (
    <>
    <header className="header">
        <p className='logo'>Trago Amargo</p>
        

        <nav className='navbar'>
            <a href="#home">Home</a>
            <a href="#SobreNosotros">Sobre nosotros</a>
            <a href="#Cervezas">Cervezas</a>
            <a href="#Gin">Gin</a>
            <a href="#contactanos">Contáctanos</a> 
        </nav>

        <a href="Carrito"><Cart valor='0'></Cart>Carrito</a>
    </header>
    </>
  )
}

export default NavBar;