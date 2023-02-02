import '../Pages/AboutUs.css';
import ivan from '../Images/AboutUs/ivan.jpeg';
import musa from '../Images/AboutUs/musa.jpeg';
import nico from '../Images/AboutUs/nico.jpeg';
import racedo from '../Images/AboutUs/racedo.jpeg';
import IconFacebook from '../Images/Social Media/IconFacebook.png';
import IconInstagram from '../Images/Social Media/IconInstagram.png';
import IconTwitter from '../Images/Social Media/IconTwitter.png';

const AboutUs = () => {
    return(
    <>
        <div className='ContentAbout'>
            <div class="ContentAboutUs">
                <h1 id='Abouth1'>Nosotros somos Travel Adventure</h1>
                <h3>Somos un grupo de trabajo realizando el curso de Full Stack Web Developer Dictado por Universidad Nacional de Tucuman</h3>

                <div class="Grid">
                    <div class="Card">
                        <a className='Links' href="#">
                            <img src={racedo} class="Image" />
                            <div>
                                <p class="Name">Racedo Sebastian</p>
                                <div class="Redes">
                                    <a className='Links' href=""><img class="Icon" src={IconFacebook} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconInstagram} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconTwitter} /></a>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div class="Card">
                        <a className='Links' href="#">
                            <img src={ivan} class="Image" />
                            <div>
                                <p class="Name">Díaz Iván</p>
                                <div class="Redes">
                                    <a className='Links' href=""><img class="Icon" src={IconFacebook} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconInstagram} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconTwitter} /></a>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div class="Card">
                        <a className='Links' href="#">
                            <img src={musa} class="Image" />
                            <div>
                                <p class="Name">Musa Abel</p>
                                <div class="Redes">
                                    <a className='Links' href=""><img class="Icon" src={IconFacebook} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconInstagram} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconTwitter} /></a>
                                </div>
                            </div>
                        </a>
                    </div>
    
                    <div class="Card">
                        <a className='Links' href="#">
                            <img src={nico} class="Image" />
                            <div>
                                <p class="Name">Carol Nicolas</p>
                                <div class="Redes">
                                    <a className='Links' href=""><img class="Icon" src={IconFacebook} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconInstagram} /></a>
                                    <a className='Links' href=""><img class="Icon" src={IconTwitter} /></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default AboutUs;