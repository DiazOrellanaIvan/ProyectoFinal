import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import '../Pages/Contact.css';
import {Link} from "react-router-dom";

const Contact = () => {
    return(
        <>
        <Navbar />

        <div className="ContentContactPage">
            <div className="ContentContact">
                <h1>Contacto</h1>
                <form className="Form">
                    <fieldset>
                        <legend>Llena los siguientes campos y te contactaremos</legend>

                        <div className="ContentCamps">
                            <div className="Camp">
                                <label for="Nombre">Nombre</label>
                                <input className="InputText" type="text" placeholder="Tu nombre"/>
                            </div>

                            <div className="Camp">
                                <label for="Numero de Telefono">Numero de Telefono</label>
                                <input className="InputText" type="tel" placeholder="Tu numero de telefono"/>
                            </div>
                            
                            <div className="Camp">
                                <label for="Email">Email</label>
                                <input className="InputText" type="email" placeholder="Tu email"/>
                            </div>

                            <div className="Camp">
                                <label for="Mensaje">Mensaje</label>
                                <textarea className="InputText"></textarea>
                            </div>
                        </div>

                        <div className="Enviar">
                            <button className="BotonContact"><Link className='LinkContact' to="/Home">Enviar</Link></button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Contact;