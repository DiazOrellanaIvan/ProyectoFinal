import '../Components/Cards.css';
import uno from '../Images/Cards/uno.jpg';
import dos from '../Images/Cards/dos.jpg';
import tres from '../Images/Cards/tres.jpg';
import cuatro from '../Images/Cards/cuatro.jpg';
import {Link} from "react-router-dom";

const Cards = () => {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <figure>
                        <img src={uno} />
                    </figure>
                    <div className='content'>
                        <h2>JUJUY</h2>
                        <h3>Precio de $60.000</h3>
                        <p> 6 dias / 5 noches </p>
                        <Link to='/NotFound'>VER MAS</Link>
                    </div>
                </div>
                <div className='card'>
                    <figure>
                        <img src={dos} />
                    </figure>
                    <div className='content'>
                        <h2>CATARATAS</h2>
                        <h3>Precio de $43.000</h3>
                        <p> 5 dias / 4 noches </p>
                        <Link to='/NotFound'>VER MAS</Link>
                    </div>
                </div>
                <div className='card'>
                    <figure>
                        <img src={tres} />
                    </figure>
                    <div className='content'>
                        <h2>SANTA CRUZ</h2>
                        <h3>Precio de $52.500</h3>
                        <p> 7 dias / 5 noches </p>
                        <Link to='/NotFound'>VER MAS</Link>
                    </div>
                </div>
                <div className='card'>
                    <figure>
                        <img src={cuatro} />
                    </figure>
                    <div className='content'>
                        <h2>BARILOCHE</h2>
                        <h3>Precio de $33.000</h3>
                        <p> 6 dias / 5 noches </p>
                        <Link to='/NotFound'>VER MAS</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;