import './Footer.css';
import Logo from '../Images/Others/Logo.png';
import IconFacebook from '../Images/Social Media/IconFacebook.png';
import IconInstagram from '../Images/Social Media/IconInstagram.png';
import IconTwitter from '../Images/Social Media/IconTwitter.png';

const Footer = () => {
   return(
    <>
        <footer className='Footer'>
            <a href="#">
                <img src={Logo} className='ImgLogo' />
                <div><p className='copyrigth'>© 2022 Travel Adventure. Todos los derechos reservados</p></div>
            </a>
            <ul className='RedesFooter'>
                <li className='FootItem'><a href="#" className='FootLink'><img className='ImgRedes' src={IconFacebook}/></a></li>
                <li className='FootItem'><a href="#" className='FootLink'><img className='ImgRedes' src={IconInstagram}/></a></li>
                <li className='FootItem'><a href="#" className='FootLink'><img className='ImgRedes' src={IconTwitter}/></a></li>
            </ul>   
            <ul className='Pages'>
                <li className='FItem'><a href="../Pages/NotFound.jsx" className='FLink'>Inicio</a></li>
                <li className='FItem'><a href="../Pages/NotFound.jsx" className='FLink'>Quienes Somos</a></li>
                <li className='FItem'><a href="../Pages/NotFound.jsx" className='FLink'>Contacto</a></li>
            </ul>
        </footer>
    </>
   ); 
}

export default Footer;