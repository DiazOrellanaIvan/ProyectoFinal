import './NotFound.css';
import Error404 from '../Images/Others/Error404.jpeg';

const NotFound = () => {
    return(
        <body>
            <div className='container'>
                <img src={Error404} />
                <h1>En este momento la página solicitada no está disponible</h1>
                <div className='btn'>
                    <button><a href="#">Atras</a></button>
                </div>
            </div>
        </body>
    );
}

export default NotFound;