import '../Components/Navbar.css';
import Logo from '../Images/Others/Logo.png';
import Perfil from '../Images/Others/Perfil.png';
import HamburguerMenu from '../Images/Others/HamburguerMenu.png';
// import './Boton.js';

import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className='nav'>
            <img src={Logo} />
            <button className='toggle'>
                <img className='toggleimg' src={HamburguerMenu} />
            </button>
            <ul className='navMenu'>
                <li className='navItem'><Link to="/Home" className='navLink'>Inicio</Link></li>
                <li className='navItem'><Link to="/AboutUs" className='navLink'>Quienes Somos</Link></li>
                <li className='navItem'><a href="#" className='navLink'>Contacto</a></li>
                <li className='navCuenta navItem'><Link to='/NotFound' className='navLink'>Cuenta</Link></li>
                <Link to='/NotFound'><img className='imgPerfil' src={Perfil} /></Link>
            </ul>
        </nav>
    );
}

export default Navbar;