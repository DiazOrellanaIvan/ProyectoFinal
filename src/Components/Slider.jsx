import '../Components/Slider.css'
import Brasil from '../Images/Slider/Brasil.jpg';
import Egipto from '../Images/Slider/Egipto.jpg';
import Francia from '../Images/Slider/Francia.jpg';
import Maldivas from '../Images/Slider/Maldivas.jpg';

function Slider() {
    return (
        <section>
            <div className="slider">
                <ul>
                    <li><img src={Maldivas}/></li>
                    <li><img src={Egipto}/></li>
                    <li><img src={Francia}/></li>
                    <li><img src={Brasil}/></li>
                </ul>
            </div>
        </section>
    )
}

export default Slider;