import './NotFound.css';
import Error404 from '../Images/Others/Error404.jpeg';
import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div className='ContentNotFound'>
            <div className='ContainerNotFound'>
                <img className='ImageNotFound' src={Error404} />
                <h1>En este momento la página solicitada no está disponible</h1>
                <div className='btn'>
                    <button><Link to='/Home'>Atras</Link></button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;