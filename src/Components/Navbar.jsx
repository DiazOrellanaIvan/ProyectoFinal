import '../Components/Navbar.css';
import Logo from '../Images/Others/Logo.png';
import Perfil from '../Images/Others/Perfil.png';
import HamburguerMenu from '../Images/Others/HamburguerMenu.png';
// import './Boton.js'

const Navbar = () => {
    return(
        <nav className='nav'>
            <img src={Logo} />
            <button className='toggle'>
                <img className='toggleimg' src={HamburguerMenu} />
            </button>
            <ul className='navMenu'>
                <li className='navItem'><a href="#" className='navLink'>Inicio</a></li>
                <li className='navItem'><a href="#" className='navLink'>Quienes Somos</a></li>
                <li className='navItem'><a href="#" className='navLink'>Contacto</a></li>
                <li className='navCuenta navItem'><a href="#" className='navLink'>Cuenta</a></li>
                <a href="#"><img className='imgPerfil' src={Perfil} /></a>
            </ul>
        </nav>
    );
}

export default Navbar;