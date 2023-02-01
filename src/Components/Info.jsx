import '../Components/Info.css';
import png2 from '../Images/Info/PNG1.png';
import png3 from '../Images/Info/PNG2.png';
import png1 from '../Images/Info/PNG3.png';

const Info = () => {
    return (
        <div className='grid'>
            <div className='caja'>
                <img id='png' src={png1} />
                <h3 id='title'>Calidad de servicios</h3>
                <p id='text'>Con mas de 10 años en el mercado,
                    gestionamos que funciona de forma
                    integra todo los elementos que intervienen
                    en el viaje y el proceso de presentación
                    del servicio para sastifacer las expectativas.

                </p>
            </div>
            <div className='caja'>
                <img id='png' src={png2} />
                <h3 id='title'>Atención personalizada</h3>
                <p id='text'>Con más de 20 puntos de ventas en todo el país
                    buscamos en todo momento la satisfacción hacia
                    el cliente. Contamos con un equipo de profesionales
                    de amplia experiencia
                </p>
            </div>
            <div className='caja'>
                <img id='png' src={png3} />
                <h3 id='title'>Amplia financiación</h3>
                <p id='text'>Disponemos de una amplia financiación
                    y te asesoramos sobre las mejores promociones
                    del mercado para que puedas realizar tus pagos
                    de la mejor manera.
                </p>
            </div>
        </div>
    )
}

export default Info;
