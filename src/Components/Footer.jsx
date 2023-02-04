import './Footer.css';
import Logo from '../Images/Others/Logo.png';
import IconFacebook from '../Images/Social Media/IconFacebook.png';
import IconInstagram from '../Images/Social Media/IconInstagram.png';
import IconTwitter from '../Images/Social Media/IconTwitter.png';
import {Link} from "react-router-dom";

const Footer = () => {
   return(
    <>
        <footer className='Footer'>
            <a href="#">
                <img src={Logo} className='ImgLogo' />
                <div><p className='copyrigth'>© 2022 Travel Adventure. Todos los derechos reservados</p></div>
            </a>
            <ul className='RedesFooter'>
                <li className='FootItem'><Link to='/NotFound' className='FootLink'><img className='ImgRedes' src={IconFacebook}/></Link></li>
                <li className='FootItem'><Link to='/NotFound' className='FootLink'><img className='ImgRedes' src={IconInstagram}/></Link></li>
                <li className='FootItem'><Link to='/NotFound' className='FootLink'><img className='ImgRedes' src={IconTwitter}/></Link></li>
            </ul>   
            <ul className='Pages'>
                <li className='FItem'><Link to='/Home' className='FLink'>Inicio</Link></li>
                <li className='FItem'><Link to='/AboutUs' className='FLink'>Quienes Somos</Link></li>
                <li className='FItem'><Link to='/Contact' className='FLink'>Contacto</Link></li>
            </ul>
        </footer>
    </>
   ); 
}

export default Footer;