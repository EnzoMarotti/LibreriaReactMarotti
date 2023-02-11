import './NavBar.css'
import Cart from './CartWidget'
import { Link, NavLink } from 'react-router-dom';

 const NavBar = () => {
  return (
    <>
    <header className="header">
        <NavLink className='logo'  to="/" >Trago Amargo</NavLink>
        

        <nav className='navbar'>
            <NavLink to="/">Home</NavLink>
           <NavLink to="/categoria/Cervezas">  Cervezas </NavLink>
           <NavLink to="/categoria/Gin">  Gin </NavLink>
        </nav>

        <Link to="/cart"><Cart valor='0'></Cart>Carrito</Link>
    </header>
    </>
  )
}

export default NavBar; 